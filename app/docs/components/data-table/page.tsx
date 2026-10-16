"use client"

import * as React from "react"
import Link from "next/link"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Check, Clipboard } from "lucide-react"
import { ComponentInstallation } from "@/components/docs/component-installation"
import { useLanguage } from "@/components/providers/language-provider"
import { DataTableSortButton } from "@/components/ui/data-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]

  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string

  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string

  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}

function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const text = useExampleText()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const resolvedSearchKey = searchKey ?? filterColumn

  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? text("Search...", "ရှာရန်...")

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined

  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? text("No results found.", "ရလဒ် မတွေ့ပါ။")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}

function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const text = useExampleText()
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {text("Columns", "ကော်လံများ")}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}

function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const text = useExampleText()
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)

  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {text("Selected rows", "ရွေးထားသောအတန်း")} {selectedCount} /{" "}
        {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {text("Page", "စာမျက်နှာ")} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={text("Table pagination", "ဇယား စာမျက်နှာများ")}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={text("Previous page", "ယခင်စာမျက်နှာ")}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {text("Previous", "ယခင်")}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={text("Page ", "စာမျက်နှာ ") + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={text("Next page", "နောက်စာမျက်နှာ")}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {text("Next", "နောက်")}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

function useExampleText() {
  const { language } = useLanguage()
  return (en: string, my: string) => (language === "my" ? my : en)
}

function PaymentsExample() {
  const text = useExampleText()
  type Payment = { id: string; email: string; status: string; amount: number }
  const payments: Payment[] = [
    { id: "pay_1", email: "ada\@example.com", status: "Paid", amount: 249 },
    { id: "pay_2", email: "lin\@example.com", status: "Pending", amount: 125 },
    { id: "pay_3", email: "grace\@example.com", status: "Paid", amount: 499 },
  ]
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          aria-label={text("Select all rows", "အတန်းအားလုံး ရွေးရန်")}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={(event) =>
            table.toggleAllPageRowsSelected(event.target.checked)
          }
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          aria-label={row.original.email}
          checked={row.getIsSelected()}
          onChange={(event) => row.toggleSelected(event.target.checked)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: text("Status", "အခြေအနေ"),
      cell: ({ row }) =>
        row.original.status === "Paid"
          ? text("Paid", "ပေးချေပြီး")
          : text("Pending", "စောင့်ဆိုင်းဆဲ"),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      accessorKey: "amount",
      header: () => (
        <div className="text-right">{text("Amount", "ငွေပမာဏ")}</div>
      ),
      cell: ({ row }) => (
        <div className="text-right">${row.original.amount.toFixed(2)}</div>
      ),
    },
  ]
  return (
    <DataTable
      pageSize={2}
      columns={columns}
      data={payments}
      filterColumn="email"
      filterPlaceholder={text("Filter emails...", "Email ဖြင့် ရှာရန်...")}
      getRowId={(row) => row.id}
      enableRowSelection
    />
  )
}

function ProductsExample() {
  const text = useExampleText()
  type Product = {
    id: string
    name: string
    sku: string
    stock: number
    price: number
  }
  const products: Product[] = [
    {
      id: "p1",
      name: text("Rice 5 kg", "ဆန် ၅ ကီလို"),
      sku: "RICE-05",
      stock: 42,
      price: 18000,
    },
    {
      id: "p2",
      name: text("Cooking oil", "စားသုံးဆီ"),
      sku: "OIL-01",
      stock: 8,
      price: 12000,
    },
    {
      id: "p3",
      name: text("Coffee", "ကော်ဖီ"),
      sku: "COF-01",
      stock: 0,
      price: 6500,
    },
    {
      id: "p4",
      name: text("Milk", "နို့"),
      sku: "MILK-01",
      stock: 24,
      price: 3500,
    },
    {
      id: "p5",
      name: text("Tea", "လက်ဖက်ရည်"),
      sku: "TEA-01",
      stock: 5,
      price: 2800,
    },
    {
      id: "p6",
      name: text("Sugar", "သကြား"),
      sku: "SUG-01",
      stock: 30,
      price: 4500,
    },
    {
      id: "p7",
      name: text("Noodles", "ခေါက်ဆွဲ"),
      sku: "NOOD-01",
      stock: 60,
      price: 1200,
    },
  ]
  const columns: ColumnDef<Product>[] = [
    { accessorKey: "name", header: text("Product", "ကုန်ပစ္စည်း") },
    { accessorKey: "sku", header: "SKU" },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {text("Stock", "လက်ကျန်")} <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
      cell: ({ row }) => (
        <span
          className={
            row.original.stock === 0
              ? "rounded-full bg-red-100 px-2.5 py-1 text-red-800 dark:bg-red-950 dark:text-red-200"
              : row.original.stock < 10
                ? "rounded-full bg-amber-100 px-2.5 py-1 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                : "rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
          }
        >
          {row.original.stock === 0
            ? text("Out of stock", "ပစ္စည်းပြတ်")
            : row.original.stock}
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: text("Price (MMK)", "စျေးနှုန်း (ကျပ်)"),
      cell: ({ row }) => row.original.price.toFixed(0) + " MMK",
    },
  ]

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )

  // Search and sort the complete dataset before dividing it into pages.
  const table = useReactTable({
    data: products,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const currentPage = table.getState().pagination.pageIndex + 1
  const pageCount = Math.max(table.getPageCount(), 1)
  const total = table.getFilteredRowModel().rows.length
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)

  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="w-full sm:max-w-sm">
        <label htmlFor="products-example-search" className="sr-only">
          {text("Search products", "ကုန်ပစ္စည်း ရှာရန်")}
        </label>
        <Input
          id="products-example-search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.setPageIndex(0)
            table.getColumn("name")?.setFilterValue(event.target.value)
          }}
          placeholder={text("Search products...", "ကုန်ပစ္စည်း ရှာရန်...")}
        />
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-xl border bg-background">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              ကုန်ပစ္စည်းနှင့် လက်ကျန်စာရင်း
            </caption>
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((group) => (
                <tr key={group.id}>
                  {group.headers.map((header) => (
                    <th
                      key={header.id}
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-left font-medium leading-7"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 leading-7"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    ကုန်ပစ္စည်း မတွေ့ပါ။
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p role="status" className="text-sm leading-7 text-muted-foreground">
          {text("Total", "စုစုပေါင်း")} {total} · {text("Page", "စာမျက်နှာ")}{" "}
          {currentPage} / {pageCount}
        </p>

        {/* Binhlaig UI Pagination */}
        <Pagination
          aria-label={text("Product pagination", "ကုန်ပစ္စည်း စာမျက်နှာများ")}
          className="mx-0 w-auto max-w-full justify-start"
        >
          <PaginationContent className="flex-wrap gap-1.5">
            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label={text("Previous page", "ယခင်စာမျက်နှာ")}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {text("Previous", "ယခင်")}
              </PaginationButton>
            </PaginationItem>

            {pages.map((page, index) => (
              <React.Fragment key={page}>
                {index > 0 && page - pages[index - 1] > 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationButton
                    isActive={page === currentPage}
                    onClick={() => table.setPageIndex(page - 1)}
                    aria-label={text("Page ", "စာမျက်နှာ ") + page}
                  >
                    {page}
                  </PaginationButton>
                </PaginationItem>
              </React.Fragment>
            ))}

            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label={text("Next page", "နောက်စာမျက်နှာ")}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {text("Next", "နောက်")}
              </PaginationButton>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

function StaffExample() {
  const text = useExampleText()
  type Staff = { id: string; name: string; role: string; active: boolean }
  const staff: Staff[] = [
    { id: "ST-001", name: "Aung Aung", role: "Manager", active: true },
    { id: "ST-002", name: "Su Su", role: "Cashier", active: true },
    { id: "ST-003", name: "Hla Hla", role: "Cashier", active: false },
    { id: "ST-004", name: "Min Min", role: "Kitchen", active: true },
    { id: "ST-005", name: "May May", role: "Service", active: true },
    { id: "ST-006", name: "Ko Ko", role: "Service", active: false },
  ]
  const columns: ColumnDef<Staff>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={text(
            "Select this page",
            "ဤစာမျက်နှာရှိ ဝန်ထမ်းများ ရွေးရန်",
          )}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={row.original.name}
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: text("Staff ID", "ဝန်ထမ်း ID"),
      enableHiding: false,
    },
    { accessorKey: "name", header: text("Name", "အမည်") },
    { accessorKey: "role", header: text("Role", "တာဝန်") },
    {
      accessorKey: "active",
      header: text("Status", "အခြေအနေ"),
      cell: ({ row }) => (
        <span
          className={
            row.original.active
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-muted-foreground"
          }
        >
          {row.original.active
            ? text("Active", "တာဝန်ထမ်းဆောင်ဆဲ")
            : text("Inactive", "ရပ်နားထား")}
        </span>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p className="text-sm leading-7 text-muted-foreground">
        {text(
          "Select individual staff or all rows on the current page. Use Columns to hide optional fields.",
          "ဝန်ထမ်းတစ်ဦးချင်း သို့မဟုတ် လက်ရှိစာမျက်နှာရှိ အားလုံးကို ရွေးပါ။ Columns မှ မလိုသောကော်လံများကို ဖျောက်နိုင်ပါသည်။",
        )}
      </p>
      <DataTable
        columns={columns}
        data={staff}
        searchKey="name"
        searchPlaceholder={text("Search staff...", "ဝန်ထမ်း ရှာရန်...")}
        pageSize={5}
        getRowId={(row) => row.id}
        enableRowSelection
      />
    </div>
  )
}

function OrdersExample() {
  const text = useExampleText()
  type Order = {
    id: string
    customer: string
    status: "pending" | "completed"
    total: number
  }
  const orders: Order[] = [
    { id: "ORD-001", customer: "Aung Aung", status: "pending", total: 18500 },
    { id: "ORD-002", customer: "Su Su", status: "completed", total: 32000 },
    { id: "ORD-003", customer: "Min Min", status: "pending", total: 12500 },
    { id: "ORD-004", customer: "May May", status: "completed", total: 27000 },
  ]
  const [status, setStatus] = React.useState<"all" | Order["status"]>("all")
  const [details, setDetails] = React.useState<Order | null>(null)
  const statusText = (value: Order["status"]) =>
    value === "pending"
      ? text("Pending", "စောင့်ဆိုင်းဆဲ")
      : text("Completed", "ပြီးစီး")
  const columns: ColumnDef<Order>[] = [
    { accessorKey: "id", header: text("Order", "အော်ဒါ") },
    { accessorKey: "customer", header: text("Customer", "ဝယ်ယူသူ") },
    {
      accessorKey: "status",
      header: text("Status", "အခြေအနေ"),
      cell: ({ row }) => statusText(row.original.status),
    },
    {
      accessorKey: "total",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {text("Total (MMK)", "စုစုပေါင်း (ကျပ်)")}{" "}
          <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      id: "actions",
      header: text("Details", "အသေးစိတ်"),
      cell: ({ row }) => (
        <Button variant="outline" onClick={() => setDetails(row.original)}>
          {text("View", "ကြည့်ရန်")}
        </Button>
      ),
      enableHiding: false,
      enableSorting: false,
    },
  ]
  const filtered =
    status === "all"
      ? orders
      : orders.filter((order) => order.status === status)
  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={text("Order status", "အော်ဒါအခြေအနေ")}
      >
        {(["all", "pending", "completed"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={status === value}
            onClick={() => setStatus(value)}
            className={
              "shrink-0 whitespace-nowrap rounded-lg border px-4 py-2 text-sm leading-7 " +
              (status === value
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-muted")
            }
          >
            {value === "all" ? text("All", "အားလုံး") : statusText(value)}
          </button>
        ))}
      </div>
      <DataTable
        key={status}
        columns={columns}
        data={filtered}
        searchKey="customer"
        searchPlaceholder={text("Search customers...", "ဝယ်ယူသူ ရှာရန်...")}
        pageSize={2}
        getRowId={(row) => row.id}
      />
      {details && (
        <section
          className="rounded-xl border bg-muted/30 p-4"
          aria-label={text("Order details", "အော်ဒါအသေးစိတ်")}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold">{details.id}</h3>
            <button
              type="button"
              onClick={() => setDetails(null)}
              className="shrink-0 whitespace-nowrap rounded-lg border px-3 py-2 text-sm leading-7 hover:bg-muted"
            >
              {text("Close", "ပိတ်ရန်")}
            </button>
          </div>
          <p className="mt-3 text-sm leading-7">
            {details.customer} · {statusText(details.status)} · {details.total}{" "}
            MMK
          </p>
        </section>
      )}
    </div>
  )
}

function TasksExample() {
  const text = useExampleText()
  type Task = {
    id: string
    title: string
    assignee: string
    status: "pending" | "in_progress" | "done"
  }
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: "TASK-01",
      title: "Check stock",
      assignee: "Aung Aung",
      status: "pending",
    },
    {
      id: "TASK-02",
      title: "Prepare labels",
      assignee: "Su Su",
      status: "in_progress",
    },
    {
      id: "TASK-03",
      title: "Clean counter",
      assignee: "Min Min",
      status: "done",
    },
    {
      id: "TASK-04",
      title: "Review receipts",
      assignee: "May May",
      status: "pending",
    },
  ])
  const statusText = (value: Task["status"]) =>
    value === "done"
      ? text("Done", "ပြီးစီး")
      : value === "in_progress"
        ? text("In progress", "လုပ်ဆောင်ဆဲ")
        : text("Pending", "စောင့်ဆိုင်းဆဲ")
  const columns: ColumnDef<Task>[] = [
    { accessorKey: "id", header: "ID", enableHiding: false },
    { accessorKey: "title", header: text("Task", "လုပ်ငန်း") },
    { accessorKey: "assignee", header: text("Assignee", "တာဝန်ခံ") },
    {
      accessorKey: "status",
      header: text("Update status", "အခြေအနေ ပြောင်းရန်"),
      cell: ({ row }) => (
        <select
          aria-label={text("Status for ", "အခြေအနေ — ") + row.original.title}
          value={row.original.status}
          onChange={(event) => {
            const value = event.target.value
            if (
              value === "pending" ||
              value === "in_progress" ||
              value === "done"
            )
              setTasks((current) =>
                current.map((task) =>
                  task.id === row.original.id
                    ? { ...task, status: value }
                    : task,
                ),
              )
          }}
          className="min-h-10 rounded-lg border bg-background px-3 py-2 text-sm leading-7 text-foreground"
        >
          {(["pending", "in_progress", "done"] as const).map((value) => (
            <option key={value} value={value}>
              {statusText(value)}
            </option>
          ))}
        </select>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p role="status" className="text-sm leading-7">
        {text("Completed tasks", "ပြီးစီးသည့်လုပ်ငန်း")} —{" "}
        {tasks.filter((task) => task.status === "done").length} / {tasks.length}
      </p>
      <DataTable
        columns={columns}
        data={tasks}
        searchKey="title"
        searchPlaceholder={text("Search tasks...", "လုပ်ငန်း ရှာရန်...")}
        pageSize={3}
        getRowId={(row) => row.id}
      />
      <p className="text-sm leading-7 text-muted-foreground">
        {text(
          "Demo changes are stored in this page's React state and reset on refresh.",
          "ဤနမူနာ၏ ပြောင်းလဲမှုများကို React state တွင်သာ သိမ်းထားပြီး refresh လုပ်လျှင် မူလအတိုင်း ပြန်ဖြစ်ပါမည်။",
        )}
      </p>
    </div>
  )
}

const exampleCode = {
  payments: {
    en: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "Search..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "No results found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"Columns"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"Selected rows"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"Page"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"Table pagination"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"Previous page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Previous"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"Page " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"Next page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Next"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function PaymentsExample() {
  type Payment = {
    id: string
    email: string
    status: string
    amount: number
  }
  const payments: Payment[] = [
    { id: "pay_1", email: "ada\\@example.com", status: "Paid", amount: 249 },
    { id: "pay_2", email: "lin\\@example.com", status: "Pending", amount: 125 },
    { id: "pay_3", email: "grace\\@example.com", status: "Paid", amount: 499 },
  ]
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          aria-label={"Select all rows"}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={(event) =>
            table.toggleAllPageRowsSelected(event.target.checked)
          }
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          aria-label={row.original.email}
          checked={row.getIsSelected()}
          onChange={(event) => row.toggleSelected(event.target.checked)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (row.original.status === "Paid" ? "Paid" : "Pending"),
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">{"Amount"}</div>,
      cell: ({ row }) => (
        <div className="text-right">\${row.original.amount.toFixed(2)}</div>
      ),
    },
  ]
  return (
    <DataTable
      pageSize={2}
      columns={columns}
      data={payments}
      filterColumn="email"
      filterPlaceholder={"Filter emails..."}
      getRowId={(row) => row.id}
      enableRowSelection
    />
  )
}
`,
    my: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "ရှာရန်..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "ရလဒ် မတွေ့ပါ။"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"ကော်လံများ"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"ရွေးထားသောအတန်း"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"စာမျက်နှာ"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"ဇယား စာမျက်နှာများ"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"ယခင်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"ယခင်"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"စာမျက်နှာ " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"နောက်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"နောက်"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function PaymentsExample() {
  type Payment = {
    id: string
    email: string
    status: string
    amount: number
  }
  const payments: Payment[] = [
    { id: "pay_1", email: "ada\\@example.com", status: "Paid", amount: 249 },
    { id: "pay_2", email: "lin\\@example.com", status: "Pending", amount: 125 },
    { id: "pay_3", email: "grace\\@example.com", status: "Paid", amount: 499 },
  ]
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          aria-label={"အတန်းအားလုံး ရွေးရန်"}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={(event) =>
            table.toggleAllPageRowsSelected(event.target.checked)
          }
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          aria-label={row.original.email}
          checked={row.getIsSelected()}
          onChange={(event) => row.toggleSelected(event.target.checked)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "အခြေအနေ",
      cell: ({ row }) =>
        row.original.status === "Paid" ? "ပေးချေပြီး" : "စောင့်ဆိုင်းဆဲ",
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">{"ငွေပမာဏ"}</div>,
      cell: ({ row }) => (
        <div className="text-right">\${row.original.amount.toFixed(2)}</div>
      ),
    },
  ]
  return (
    <DataTable
      pageSize={2}
      columns={columns}
      data={payments}
      filterColumn="email"
      filterPlaceholder={"Email ဖြင့် ရှာရန်..."}
      getRowId={(row) => row.id}
      enableRowSelection
    />
  )
}
`,
  },
  products: {
    en: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

export function ProductsExample() {
  type Product = {
    id: string
    name: string
    sku: string
    stock: number
    price: number
  }
  const products: Product[] = [
    {
      id: "p1",
      name: "Rice 5 kg",
      sku: "RICE-05",
      stock: 42,
      price: 18000,
    },
    {
      id: "p2",
      name: "Cooking oil",
      sku: "OIL-01",
      stock: 8,
      price: 12000,
    },
    {
      id: "p3",
      name: "Coffee",
      sku: "COF-01",
      stock: 0,
      price: 6500,
    },
    {
      id: "p4",
      name: "Milk",
      sku: "MILK-01",
      stock: 24,
      price: 3500,
    },
    {
      id: "p5",
      name: "Tea",
      sku: "TEA-01",
      stock: 5,
      price: 2800,
    },
    {
      id: "p6",
      name: "Sugar",
      sku: "SUG-01",
      stock: 30,
      price: 4500,
    },
    {
      id: "p7",
      name: "Noodles",
      sku: "NOOD-01",
      stock: 60,
      price: 1200,
    },
  ]
  const columns: ColumnDef<Product>[] = [
    { accessorKey: "name", header: "Product" },
    { accessorKey: "sku", header: "SKU" },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"Stock"} <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
      cell: ({ row }) => (
        <span
          className={
            row.original.stock === 0
              ? "rounded-full bg-red-100 px-2.5 py-1 text-red-800 dark:bg-red-950 dark:text-red-200"
              : row.original.stock < 10
                ? "rounded-full bg-amber-100 px-2.5 py-1 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                : "rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
          }
        >
          {row.original.stock === 0 ? "Out of stock" : row.original.stock}
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: "Price (MMK)",
      cell: ({ row }) => row.original.price.toFixed(0) + " MMK",
    },
  ]
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  // Search and sort the complete dataset before dividing it into pages.
  const table = useReactTable({
    data: products,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const currentPage = table.getState().pagination.pageIndex + 1
  const pageCount = Math.max(table.getPageCount(), 1)
  const total = table.getFilteredRowModel().rows.length
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="w-full sm:max-w-sm">
        <label htmlFor="products-example-search" className="sr-only">
          {"Search products"}
        </label>
        <Input
          id="products-example-search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.setPageIndex(0)
            table.getColumn("name")?.setFilterValue(event.target.value)
          }}
          placeholder={"Search products..."}
        />
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-xl border bg-background">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              ကုန်ပစ္စည်းနှင့် လက်ကျန်စာရင်း
            </caption>
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((group) => (
                <tr key={group.id}>
                  {group.headers.map((header) => (
                    <th
                      key={header.id}
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-left font-medium leading-7"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 leading-7"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    ကုန်ပစ္စည်း မတွေ့ပါ။
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p role="status" className="text-sm leading-7 text-muted-foreground">
          {"Total"} {total} · {"Page"} {currentPage} / {pageCount}
        </p>

        {/* Binhlaig UI Pagination */}
        <Pagination
          aria-label={"Product pagination"}
          className="mx-0 w-auto max-w-full justify-start"
        >
          <PaginationContent className="flex-wrap gap-1.5">
            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label={"Previous page"}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {"Previous"}
              </PaginationButton>
            </PaginationItem>

            {pages.map((page, index) => (
              <React.Fragment key={page}>
                {index > 0 && page - pages[index - 1] > 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationButton
                    isActive={page === currentPage}
                    onClick={() => table.setPageIndex(page - 1)}
                    aria-label={"Page " + page}
                  >
                    {page}
                  </PaginationButton>
                </PaginationItem>
              </React.Fragment>
            ))}

            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label={"Next page"}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {"Next"}
              </PaginationButton>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
`,
    my: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

export function ProductsExample() {
  type Product = {
    id: string
    name: string
    sku: string
    stock: number
    price: number
  }
  const products: Product[] = [
    {
      id: "p1",
      name: "ဆန် ၅ ကီလို",
      sku: "RICE-05",
      stock: 42,
      price: 18000,
    },
    {
      id: "p2",
      name: "စားသုံးဆီ",
      sku: "OIL-01",
      stock: 8,
      price: 12000,
    },
    {
      id: "p3",
      name: "ကော်ဖီ",
      sku: "COF-01",
      stock: 0,
      price: 6500,
    },
    {
      id: "p4",
      name: "နို့",
      sku: "MILK-01",
      stock: 24,
      price: 3500,
    },
    {
      id: "p5",
      name: "လက်ဖက်ရည်",
      sku: "TEA-01",
      stock: 5,
      price: 2800,
    },
    {
      id: "p6",
      name: "သကြား",
      sku: "SUG-01",
      stock: 30,
      price: 4500,
    },
    {
      id: "p7",
      name: "ခေါက်ဆွဲ",
      sku: "NOOD-01",
      stock: 60,
      price: 1200,
    },
  ]
  const columns: ColumnDef<Product>[] = [
    { accessorKey: "name", header: "ကုန်ပစ္စည်း" },
    { accessorKey: "sku", header: "SKU" },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"လက်ကျန်"} <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
      cell: ({ row }) => (
        <span
          className={
            row.original.stock === 0
              ? "rounded-full bg-red-100 px-2.5 py-1 text-red-800 dark:bg-red-950 dark:text-red-200"
              : row.original.stock < 10
                ? "rounded-full bg-amber-100 px-2.5 py-1 text-amber-800 dark:bg-amber-950 dark:text-amber-200"
                : "rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
          }
        >
          {row.original.stock === 0 ? "ပစ္စည်းပြတ်" : row.original.stock}
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: "စျေးနှုန်း (ကျပ်)",
      cell: ({ row }) => row.original.price.toFixed(0) + " MMK",
    },
  ]
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  // Search and sort the complete dataset before dividing it into pages.
  const table = useReactTable({
    data: products,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    initialState: { pagination: { pageIndex: 0, pageSize: 5 } },
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const currentPage = table.getState().pagination.pageIndex + 1
  const pageCount = Math.max(table.getPageCount(), 1)
  const total = table.getFilteredRowModel().rows.length
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="w-full min-w-0 space-y-4">
      <div className="w-full sm:max-w-sm">
        <label htmlFor="products-example-search" className="sr-only">
          {"ကုန်ပစ္စည်း ရှာရန်"}
        </label>
        <Input
          id="products-example-search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.setPageIndex(0)
            table.getColumn("name")?.setFilterValue(event.target.value)
          }}
          placeholder={"ကုန်ပစ္စည်း ရှာရန်..."}
        />
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-xl border bg-background">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              ကုန်ပစ္စည်းနှင့် လက်ကျန်စာရင်း
            </caption>
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((group) => (
                <tr key={group.id}>
                  {group.headers.map((header) => (
                    <th
                      key={header.id}
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-left font-medium leading-7"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b last:border-0 hover:bg-muted/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 leading-7"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    ကုန်ပစ္စည်း မတွေ့ပါ။
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p role="status" className="text-sm leading-7 text-muted-foreground">
          {"စုစုပေါင်း"} {total} · {"စာမျက်နှာ"} {currentPage} / {pageCount}
        </p>

        {/* Binhlaig UI Pagination */}
        <Pagination
          aria-label={"ကုန်ပစ္စည်း စာမျက်နှာများ"}
          className="mx-0 w-auto max-w-full justify-start"
        >
          <PaginationContent className="flex-wrap gap-1.5">
            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label={"ယခင်စာမျက်နှာ"}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {"ယခင်"}
              </PaginationButton>
            </PaginationItem>

            {pages.map((page, index) => (
              <React.Fragment key={page}>
                {index > 0 && page - pages[index - 1] > 1 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationButton
                    isActive={page === currentPage}
                    onClick={() => table.setPageIndex(page - 1)}
                    aria-label={"စာမျက်နှာ " + page}
                  >
                    {page}
                  </PaginationButton>
                </PaginationItem>
              </React.Fragment>
            ))}

            <PaginationItem>
              <PaginationButton
                size="default"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label={"နောက်စာမျက်နှာ"}
                className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7"
              >
                {"နောက်"}
              </PaginationButton>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
`,
  },
  staff: {
    en: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "Search..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "No results found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"Columns"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"Selected rows"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"Page"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"Table pagination"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"Previous page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Previous"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"Page " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"Next page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Next"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function StaffExample() {
  type Staff = {
    id: string
    name: string
    role: string
    active: boolean
  }
  const staff: Staff[] = [
    { id: "ST-001", name: "Aung Aung", role: "Manager", active: true },
    { id: "ST-002", name: "Su Su", role: "Cashier", active: true },
    { id: "ST-003", name: "Hla Hla", role: "Cashier", active: false },
    { id: "ST-004", name: "Min Min", role: "Kitchen", active: true },
    { id: "ST-005", name: "May May", role: "Service", active: true },
    { id: "ST-006", name: "Ko Ko", role: "Service", active: false },
  ]
  const columns: ColumnDef<Staff>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={"Select this page"}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={row.original.name}
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "Staff ID",
      enableHiding: false,
    },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "role", header: "Role" },
    {
      accessorKey: "active",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={
            row.original.active
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-muted-foreground"
          }
        >
          {row.original.active ? "Active" : "Inactive"}
        </span>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p className="text-sm leading-7 text-muted-foreground">
        {
          "Select individual staff or all rows on the current page. Use Columns to hide optional fields."
        }
      </p>
      <DataTable
        columns={columns}
        data={staff}
        searchKey="name"
        searchPlaceholder={"Search staff..."}
        pageSize={5}
        getRowId={(row) => row.id}
        enableRowSelection
      />
    </div>
  )
}
`,
    my: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "ရှာရန်..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "ရလဒ် မတွေ့ပါ။"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"ကော်လံများ"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"ရွေးထားသောအတန်း"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"စာမျက်နှာ"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"ဇယား စာမျက်နှာများ"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"ယခင်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"ယခင်"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"စာမျက်နှာ " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"နောက်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"နောက်"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function StaffExample() {
  type Staff = {
    id: string
    name: string
    role: string
    active: boolean
  }
  const staff: Staff[] = [
    { id: "ST-001", name: "Aung Aung", role: "Manager", active: true },
    { id: "ST-002", name: "Su Su", role: "Cashier", active: true },
    { id: "ST-003", name: "Hla Hla", role: "Cashier", active: false },
    { id: "ST-004", name: "Min Min", role: "Kitchen", active: true },
    { id: "ST-005", name: "May May", role: "Service", active: true },
    { id: "ST-006", name: "Ko Ko", role: "Service", active: false },
  ]
  const columns: ColumnDef<Staff>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={"ဤစာမျက်နှာရှိ ဝန်ထမ်းများ ရွေးရန်"}
          checked={table.getIsAllPageRowsSelected()}
          ref={(element) => {
            if (element)
              element.indeterminate = table.getIsSomePageRowsSelected()
          }}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="size-4 accent-current"
          aria-label={row.original.name}
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ဝန်ထမ်း ID",
      enableHiding: false,
    },
    { accessorKey: "name", header: "အမည်" },
    { accessorKey: "role", header: "တာဝန်" },
    {
      accessorKey: "active",
      header: "အခြေအနေ",
      cell: ({ row }) => (
        <span
          className={
            row.original.active
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-muted-foreground"
          }
        >
          {row.original.active ? "တာဝန်ထမ်းဆောင်ဆဲ" : "ရပ်နားထား"}
        </span>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p className="text-sm leading-7 text-muted-foreground">
        {
          "ဝန်ထမ်းတစ်ဦးချင်း သို့မဟုတ် လက်ရှိစာမျက်နှာရှိ အားလုံးကို ရွေးပါ။ Columns မှ မလိုသောကော်လံများကို ဖျောက်နိုင်ပါသည်။"
        }
      </p>
      <DataTable
        columns={columns}
        data={staff}
        searchKey="name"
        searchPlaceholder={"ဝန်ထမ်း ရှာရန်..."}
        pageSize={5}
        getRowId={(row) => row.id}
        enableRowSelection
      />
    </div>
  )
}
`,
  },
  orders: {
    en: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "Search..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "No results found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"Columns"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"Selected rows"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"Page"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"Table pagination"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"Previous page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Previous"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"Page " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"Next page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Next"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function OrdersExample() {
  type Order = {
    id: string
    customer: string
    status: "pending" | "completed"
    total: number
  }
  const orders: Order[] = [
    { id: "ORD-001", customer: "Aung Aung", status: "pending", total: 18500 },
    { id: "ORD-002", customer: "Su Su", status: "completed", total: 32000 },
    { id: "ORD-003", customer: "Min Min", status: "pending", total: 12500 },
    { id: "ORD-004", customer: "May May", status: "completed", total: 27000 },
  ]
  const [status, setStatus] = React.useState<"all" | Order["status"]>("all")
  const [details, setDetails] = React.useState<Order | null>(null)
  const statusText = (value: Order["status"]) =>
    value === "pending" ? "Pending" : "Completed"
  const columns: ColumnDef<Order>[] = [
    { accessorKey: "id", header: "Order" },
    { accessorKey: "customer", header: "Customer" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => statusText(row.original.status),
    },
    {
      accessorKey: "total",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"Total (MMK)"} <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      id: "actions",
      header: "Details",
      cell: ({ row }) => (
        <Button variant="outline" onClick={() => setDetails(row.original)}>
          {"View"}
        </Button>
      ),
      enableHiding: false,
      enableSorting: false,
    },
  ]
  const filtered =
    status === "all"
      ? orders
      : orders.filter((order) => order.status === status)
  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={"Order status"}
      >
        {(["all", "pending", "completed"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={status === value}
            onClick={() => setStatus(value)}
            className={
              "shrink-0 whitespace-nowrap rounded-lg border px-4 py-2 text-sm leading-7 " +
              (status === value
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-muted")
            }
          >
            {value === "all" ? "All" : statusText(value)}
          </button>
        ))}
      </div>
      <DataTable
        key={status}
        columns={columns}
        data={filtered}
        searchKey="customer"
        searchPlaceholder={"Search customers..."}
        pageSize={2}
        getRowId={(row) => row.id}
      />
      {details && (
        <section
          className="rounded-xl border bg-muted/30 p-4"
          aria-label={"Order details"}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold">{details.id}</h3>
            <button
              type="button"
              onClick={() => setDetails(null)}
              className="shrink-0 whitespace-nowrap rounded-lg border px-3 py-2 text-sm leading-7 hover:bg-muted"
            >
              {"Close"}
            </button>
          </div>
          <p className="mt-3 text-sm leading-7">
            {details.customer} · {statusText(details.status)} · {details.total}{" "}
            MMK
          </p>
        </section>
      )}
    </div>
  )
}
`,
    my: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "ရှာရန်..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "ရလဒ် မတွေ့ပါ။"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"ကော်လံများ"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"ရွေးထားသောအတန်း"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"စာမျက်နှာ"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"ဇယား စာမျက်နှာများ"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"ယခင်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"ယခင်"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"စာမျက်နှာ " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"နောက်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"နောက်"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function OrdersExample() {
  type Order = {
    id: string
    customer: string
    status: "pending" | "completed"
    total: number
  }
  const orders: Order[] = [
    { id: "ORD-001", customer: "Aung Aung", status: "pending", total: 18500 },
    { id: "ORD-002", customer: "Su Su", status: "completed", total: 32000 },
    { id: "ORD-003", customer: "Min Min", status: "pending", total: 12500 },
    { id: "ORD-004", customer: "May May", status: "completed", total: 27000 },
  ]
  const [status, setStatus] = React.useState<"all" | Order["status"]>("all")
  const [details, setDetails] = React.useState<Order | null>(null)
  const statusText = (value: Order["status"]) =>
    value === "pending" ? "စောင့်ဆိုင်းဆဲ" : "ပြီးစီး"
  const columns: ColumnDef<Order>[] = [
    { accessorKey: "id", header: "အော်ဒါ" },
    { accessorKey: "customer", header: "ဝယ်ယူသူ" },
    {
      accessorKey: "status",
      header: "အခြေအနေ",
      cell: ({ row }) => statusText(row.original.status),
    },
    {
      accessorKey: "total",
      header: ({ column }) => (
        <DataTableSortButton
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {"စုစုပေါင်း (ကျပ်)"} <ArrowUpDown className="size-3.5" />
        </DataTableSortButton>
      ),
    },
    {
      id: "actions",
      header: "အသေးစိတ်",
      cell: ({ row }) => (
        <Button variant="outline" onClick={() => setDetails(row.original)}>
          {"ကြည့်ရန်"}
        </Button>
      ),
      enableHiding: false,
      enableSorting: false,
    },
  ]
  const filtered =
    status === "all"
      ? orders
      : orders.filter((order) => order.status === status)
  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={"အော်ဒါအခြေအနေ"}
      >
        {(["all", "pending", "completed"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={status === value}
            onClick={() => setStatus(value)}
            className={
              "shrink-0 whitespace-nowrap rounded-lg border px-4 py-2 text-sm leading-7 " +
              (status === value
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-muted")
            }
          >
            {value === "all" ? "အားလုံး" : statusText(value)}
          </button>
        ))}
      </div>
      <DataTable
        key={status}
        columns={columns}
        data={filtered}
        searchKey="customer"
        searchPlaceholder={"ဝယ်ယူသူ ရှာရန်..."}
        pageSize={2}
        getRowId={(row) => row.id}
      />
      {details && (
        <section
          className="rounded-xl border bg-muted/30 p-4"
          aria-label={"အော်ဒါအသေးစိတ်"}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-semibold">{details.id}</h3>
            <button
              type="button"
              onClick={() => setDetails(null)}
              className="shrink-0 whitespace-nowrap rounded-lg border px-3 py-2 text-sm leading-7 hover:bg-muted"
            >
              {"ပိတ်ရန်"}
            </button>
          </div>
          <p className="mt-3 text-sm leading-7">
            {details.customer} · {statusText(details.status)} · {details.total}{" "}
            MMK
          </p>
        </section>
      )}
    </div>
  )
}
`,
  },
  tasks: {
    en: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "Search..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "No results found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"Columns"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"Selected rows"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"Page"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"Table pagination"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"Previous page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Previous"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"Page " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"Next page"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"Next"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function TasksExample() {
  type Task = {
    id: string
    title: string
    assignee: string
    status: "pending" | "in_progress" | "done"
  }
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: "TASK-01",
      title: "Check stock",
      assignee: "Aung Aung",
      status: "pending",
    },
    {
      id: "TASK-02",
      title: "Prepare labels",
      assignee: "Su Su",
      status: "in_progress",
    },
    {
      id: "TASK-03",
      title: "Clean counter",
      assignee: "Min Min",
      status: "done",
    },
    {
      id: "TASK-04",
      title: "Review receipts",
      assignee: "May May",
      status: "pending",
    },
  ])
  const statusText = (value: Task["status"]) =>
    value === "done"
      ? "Done"
      : value === "in_progress"
        ? "In progress"
        : "Pending"
  const columns: ColumnDef<Task>[] = [
    { accessorKey: "id", header: "ID", enableHiding: false },
    { accessorKey: "title", header: "Task" },
    { accessorKey: "assignee", header: "Assignee" },
    {
      accessorKey: "status",
      header: "Update status",
      cell: ({ row }) => (
        <select
          aria-label={"Status for " + row.original.title}
          value={row.original.status}
          onChange={(event) => {
            const value = event.target.value
            if (
              value === "pending" ||
              value === "in_progress" ||
              value === "done"
            )
              setTasks((current) =>
                current.map((task) =>
                  task.id === row.original.id
                    ? { ...task, status: value }
                    : task,
                ),
              )
          }}
          className="min-h-10 rounded-lg border bg-background px-3 py-2 text-sm leading-7 text-foreground"
        >
          {(["pending", "in_progress", "done"] as const).map((value) => (
            <option key={value} value={value}>
              {statusText(value)}
            </option>
          ))}
        </select>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p role="status" className="text-sm leading-7">
        {"Completed tasks"} —{" "}
        {tasks.filter((task) => task.status === "done").length} / {tasks.length}
      </p>
      <DataTable
        columns={columns}
        data={tasks}
        searchKey="title"
        searchPlaceholder={"Search tasks..."}
        pageSize={3}
        getRowId={(row) => row.id}
      />
      <p className="text-sm leading-7 text-muted-foreground">
        {
          "Demo changes are stored in this page's React state and reset on refresh."
        }
      </p>
    </div>
  )
}
`,
    my: `"use client"
import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  RowSelectionState,
  VisibilityState,
  Table as TanStackTable,
} from "@tanstack/react-table"
import { Search, SlidersHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { DataTableSortButton } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination"

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /**
   * Preferred search API.
   */
  searchKey?: string
  searchPlaceholder?: string
  /**
   * Backward-compatible search API.
   */
  filterColumn?: string
  filterPlaceholder?: string
  pageSize?: number
  emptyMessage?: string
  getRowId?: (row: TData, index: number) => string
  enableRowSelection?: boolean
}
function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder,
  filterColumn,
  filterPlaceholder,
  pageSize = 10,
  emptyMessage,
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const resolvedSearchKey = searchKey ?? filterColumn
  const resolvedSearchPlaceholder =
    searchPlaceholder ?? filterPlaceholder ?? "ရှာရန်..."
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
    enableRowSelection,
    getRowId,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined
  return (
    <div data-slot="data-table" className="w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={(searchColumn.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                searchColumn.setFilterValue(event.target.value)
              }
              placeholder={resolvedSearchPlaceholder}
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility table={table} />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() ? "selected" : undefined}
                    className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap px-4 py-3 align-middle"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getVisibleLeafColumns().length}
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage ?? "ရလဒ် မတွေ့ပါ။"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
function DataTableColumnVisibility<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  return (
    <details className="relative">
      <summary className="flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-xl border bg-background px-3 text-sm font-medium transition hover:bg-muted">
        <SlidersHorizontal className="size-4" />
        {"ကော်လံများ"}
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll("_", " ")}
              </span>
            </label>
          ))}
      </div>
    </details>
  )
}
function DataTablePagination<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length
  const pageCount = Math.max(table.getPageCount(), 1)
  const currentPage = table.getState().pagination.pageIndex + 1
  const pages = Array.from(
    new Set([
      1,
      ...Array.from(
        { length: 5 },
        (_, index) => currentPage - 2 + index,
      ).filter((page) => page >= 1 && page <= pageCount),
      pageCount,
    ]),
  ).sort((a, b) => a - b)
  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <p className="text-sm leading-7 text-muted-foreground" role="status">
        {"ရွေးထားသောအတန်း"} {selectedCount} / {totalCount}
        <span className="ml-2 whitespace-nowrap">
          {"စာမျက်နှာ"} {currentPage} / {pageCount}
        </span>
      </p>
      <Pagination
        className="mx-0 w-auto max-w-full justify-start"
        aria-label={"ဇယား စာမျက်နှာများ"}
      >
        <PaginationContent className="flex-wrap gap-1.5">
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              aria-label={"ယခင်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"ယခင်"}
            </PaginationButton>
          </PaginationItem>
          {pages.map((page, index) => (
            <React.Fragment key={page}>
              {index > 0 && page - pages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationButton
                  isActive={page === currentPage}
                  onClick={() => table.setPageIndex(page - 1)}
                  aria-label={"စာမျက်နှာ " + page}
                >
                  {page}
                </PaginationButton>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationButton
              size="default"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              aria-label={"နောက်စာမျက်နှာ"}
              className="h-auto min-h-9 shrink-0 whitespace-nowrap py-2 leading-6"
            >
              {"နောက်"}
            </PaginationButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export function TasksExample() {
  type Task = {
    id: string
    title: string
    assignee: string
    status: "pending" | "in_progress" | "done"
  }
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: "TASK-01",
      title: "Check stock",
      assignee: "Aung Aung",
      status: "pending",
    },
    {
      id: "TASK-02",
      title: "Prepare labels",
      assignee: "Su Su",
      status: "in_progress",
    },
    {
      id: "TASK-03",
      title: "Clean counter",
      assignee: "Min Min",
      status: "done",
    },
    {
      id: "TASK-04",
      title: "Review receipts",
      assignee: "May May",
      status: "pending",
    },
  ])
  const statusText = (value: Task["status"]) =>
    value === "done"
      ? "ပြီးစီး"
      : value === "in_progress"
        ? "လုပ်ဆောင်ဆဲ"
        : "စောင့်ဆိုင်းဆဲ"
  const columns: ColumnDef<Task>[] = [
    { accessorKey: "id", header: "ID", enableHiding: false },
    { accessorKey: "title", header: "လုပ်ငန်း" },
    { accessorKey: "assignee", header: "တာဝန်ခံ" },
    {
      accessorKey: "status",
      header: "အခြေအနေ ပြောင်းရန်",
      cell: ({ row }) => (
        <select
          aria-label={"အခြေအနေ — " + row.original.title}
          value={row.original.status}
          onChange={(event) => {
            const value = event.target.value
            if (
              value === "pending" ||
              value === "in_progress" ||
              value === "done"
            )
              setTasks((current) =>
                current.map((task) =>
                  task.id === row.original.id
                    ? { ...task, status: value }
                    : task,
                ),
              )
          }}
          className="min-h-10 rounded-lg border bg-background px-3 py-2 text-sm leading-7 text-foreground"
        >
          {(["pending", "in_progress", "done"] as const).map((value) => (
            <option key={value} value={value}>
              {statusText(value)}
            </option>
          ))}
        </select>
      ),
    },
  ]
  return (
    <div className="space-y-4">
      <p role="status" className="text-sm leading-7">
        {"ပြီးစီးသည့်လုပ်ငန်း"} —{" "}
        {tasks.filter((task) => task.status === "done").length} / {tasks.length}
      </p>
      <DataTable
        columns={columns}
        data={tasks}
        searchKey="title"
        searchPlaceholder={"လုပ်ငန်း ရှာရန်..."}
        pageSize={3}
        getRowId={(row) => row.id}
      />
      <p className="text-sm leading-7 text-muted-foreground">
        {
          "ဤနမူနာ၏ ပြောင်းလဲမှုများကို React state တွင်သာ သိမ်းထားပြီး refresh လုပ်လျှင် မူလအတိုင်း ပြန်ဖြစ်ပါမည်။"
        }
      </p>
    </div>
  )
}
`,
  },
} as const

function highlightCode(code: string) {
  const tokens =
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_$][\w$]*\b)/g
  const keywords = new Set([
    "import",
    "from",
    "export",
    "default",
    "function",
    "return",
    "const",
    "let",
    "type",
    "if",
    "else",
    "true",
    "false",
    "null",
    "undefined",
    "async",
    "await",
    "as",
    "typeof",
    "new",
  ])
  const parts: React.ReactNode[] = []
  let offset = 0
  for (const match of code.matchAll(tokens)) {
    const index = match.index ?? 0
    if (index > offset) parts.push(code.slice(offset, index))
    const token = match[0]
    const after = code.slice(index + token.length)
    const color =
      token.startsWith("//") || token.startsWith("/*")
        ? "#94a3b8"
        : /^["'`]/.test(token)
          ? "#6ee7b7"
          : /^\d/.test(token)
            ? "#fcd34d"
            : keywords.has(token)
              ? "#c4b5fd"
              : /^[A-Z]/.test(token)
                ? "#7dd3fc"
                : /^\s*\(/.test(after)
                  ? "#fef08a"
                  : "#e2e8f0"
    parts.push(
      <span key={index} style={{ color, WebkitTextFillColor: "currentColor" }}>
        {token}
      </span>,
    )
    offset = index + token.length
  }
  if (offset < code.length) parts.push(code.slice(offset))
  return parts
}

function ExampleSection({
  id,
  title,
  description,
  code,
  children,
}: {
  id: string
  title: string
  description: string
  code: string
  children: React.ReactNode
}) {
  const text = useExampleText()
  const [tab, setTab] = React.useState<"preview" | "code">("preview")
  const [copyStatus, setCopyStatus] = React.useState<
    "idle" | "copied" | "failed"
  >("idle")
  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  React.useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current)
    },
    [],
  )
  async function copyCode() {
    if (timeout.current) clearTimeout(timeout.current)
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus("copied")
      timeout.current = setTimeout(() => setCopyStatus("idle"), 1500)
    } catch {
      setCopyStatus("failed")
    }
  }
  return (
    <section
      id={id}
      className="w-full min-w-0 max-w-full scroll-mt-24 space-y-4"
    >
      <div>
        <h2 className="text-xl font-semibold leading-9">{title}</h2>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="w-full min-w-0 max-w-full rounded-2xl border bg-background">
        <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
          <div className="flex gap-1" role="group" aria-label={title}>
            {(["preview", "code"] as const).map((value) => (
              <button
                type="button"
                key={value}
                aria-pressed={tab === value}
                onClick={() => setTab(value)}
                className={
                  "rounded-lg px-3 py-2 text-sm leading-7 " +
                  (tab === value
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/50")
                }
              >
                {value === "preview" ? text("Preview", "နမူနာ") : "Code"}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={copyCode}
            aria-label={text("Copy example code", "နမူနာ Code ကူးရန်")}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg hover:bg-muted"
          >
            {copyStatus === "copied" ? (
              <Check className="size-4" />
            ) : (
              <Clipboard className="size-4" />
            )}
          </button>
        </div>
        {tab === "preview" ? (
          <div className="min-w-0 p-4 sm:p-5">{children}</div>
        ) : (
          <div className="w-full min-w-0 max-w-full overflow-hidden rounded-b-2xl bg-slate-950">
            <pre
              tabIndex={0}
              aria-label={text("Example code", "နမူနာ Code")}
              className="m-0 max-h-[640px] w-full min-w-0 max-w-full overflow-auto overscroll-x-contain p-5 font-mono text-[13px] leading-6 text-slate-200"
            >
              <code className="block w-max min-w-full whitespace-pre">
                {highlightCode(code)}
              </code>
            </pre>
          </div>
        )}
      </div>
      <p
        role="status"
        className={
          copyStatus === "failed"
            ? "text-sm text-red-600 dark:text-red-400"
            : "sr-only"
        }
      >
        {copyStatus === "failed"
          ? text(
              "Unable to copy. Select the code and copy it manually.",
              "ကူးမရပါ။ Code ကို ရွေးပြီး ကိုယ်တိုင်ကူးယူပါ။",
            )
          : copyStatus === "copied"
            ? text("Copied", "ကူးယူပြီးပါပြီ")
            : ""}
      </p>
    </section>
  )
}

export default function DataTablePage() {
  const text = useExampleText()
  const { language } = useLanguage()
  return (
    <div className="data-table-docs grid w-full min-w-0 gap-10 xl:grid-cols-[minmax(0,1fr)_200px]">
      <style>{`
        .data-table-docs pre {
          background-color: #020617 !important;
          color: #e2e8f0 !important;
          -webkit-text-fill-color: currentColor;
          color-scheme: dark;
        }
        .data-table-docs pre code {
          background-color: transparent !important;
          color: #e2e8f0 !important;
          -webkit-text-fill-color: currentColor;
        }
      `}</style>
      <main className="min-w-0">
        <article className="mx-auto w-full min-w-0 max-w-4xl space-y-10 pb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">
              {text("Components", "UI Components များ")}
            </Link>
            <span>/</span>
            <span className="text-foreground">Data Table</span>
          </div>
          <header className="border-b pb-7">
            <h1 className="text-3xl font-bold leading-tight tracking-tight">
              Data Table
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
              {text(
                "Sorting, filtering, pagination, row selection, and column visibility powered by TanStack Table v8. Explore five working examples.",
                "TanStack Table v8 ဖြင့် ရှာဖွေခြင်း၊ အစီအစဉ်ပြောင်းခြင်း၊ စာမျက်နှာခွဲခြင်း၊ အတန်းရွေးခြင်းနှင့် ကော်လံဖျောက်ခြင်းတို့ကို အသုံးပြုနိုင်သော နမူနာ ၅ ခု။",
              )}
            </p>
          </header>
          <ComponentInstallation
            componentName="Data Table"
            componentSlug="data-table"
          />
          <section
            id="pagination-installation"
            className="min-w-0 scroll-mt-24 space-y-4"
          >
            <h2 className="text-xl font-semibold leading-9">
              {text("Install Pagination", "Pagination ထည့်သွင်းနည်း")}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              {text(
                "These tables use Binhlaig UI Pagination for page navigation. Install it alongside Data Table.",
                "ဤဇယားများ၏ စာမျက်နှာပြောင်းခလုတ်များတွင် Binhlaig UI Pagination ကို အသုံးပြုထားပါသည်။ Data Table နှင့်အတူ ထည့်သွင်းပါ။",
              )}
            </p>
            <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl bg-slate-950">
              <pre
                tabIndex={0}
                className="m-0 w-full min-w-0 max-w-full overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-200"
              >
                <code className="block w-max min-w-full whitespace-pre">
                  npx binhlaig-ui@latest add pagination
                </code>
              </pre>
            </div>
            <Link
              href="/docs/components/pagination"
              className="inline-block text-sm leading-7 text-primary underline underline-offset-4"
            >
              {text(
                "View Pagination documentation",
                "Pagination အသုံးပြုနည်း ကြည့်ရန်",
              )}{" "}
              →
            </Link>
          </section>
          <section id="import" className="min-w-0 scroll-mt-24 space-y-4">
            <h2 className="text-xl font-semibold leading-9">
              {text("Import", "Import လုပ်ခြင်း")}
            </h2>
            <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl bg-slate-950">
              <pre
                tabIndex={0}
                className="m-0 w-full min-w-0 max-w-full overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-200"
              >
                <code className="block w-max min-w-full whitespace-pre">
                  {
                    'import { DataTable, DataTableSortButton } from "@/components/ui/data-table"'
                  }
                </code>
              </pre>
            </div>
          </section>
          <nav
            aria-label={text("Examples", "နမူနာများ")}
            className="flex flex-wrap gap-2"
          >
            {[
              ["payments", text("Payments", "ငွေပေးချေမှု")],
              ["products", text("Products", "ကုန်ပစ္စည်း")],
              ["staff", text("Staff", "ဝန်ထမ်း")],
              ["orders", text("Orders", "အော်ဒါ")],
              ["tasks", text("Tasks", "လုပ်ငန်း")],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                className="rounded-lg border px-3 py-2 text-sm leading-7 hover:bg-muted"
              >
                {label}
              </a>
            ))}
          </nav>
          <ExampleSection
            id="payments"
            title={text("1. Payments", "၁။ ငွေပေးချေမှုစာရင်း")}
            description={text(
              "The original example: email filtering, amount display, sorting, and selectable rows.",
              "မူလနမူနာ — Email ဖြင့် ရှာခြင်း၊ ငွေပမာဏပြခြင်း၊ အစီအစဉ်ပြောင်းခြင်းနှင့် အတန်းရွေးခြင်း။",
            )}
            code={exampleCode.payments[language]}
          >
            <PaymentsExample />
          </ExampleSection>
          <ExampleSection
            id="products"
            title={text("2. Product inventory", "၂။ ကုန်ပစ္စည်းနှင့် လက်ကျန်")}
            description={text(
              "Search products, sort stock counts, and display five products per page. Stock badges indicate low or empty stock.",
              "ကုန်ပစ္စည်းရှာပါ၊ လက်ကျန်အလိုက် စီပါ။ တစ်မျက်နှာလျှင် ၅ ခု ပြသပြီး လက်ကျန်နည်းခြင်းနှင့် ပစ္စည်းပြတ်ခြင်းကို အရောင်ဖြင့် ခွဲပြထားပါသည်။",
            )}
            code={exampleCode.products[language]}
          >
            <ProductsExample />
          </ExampleSection>
          <ExampleSection
            id="staff"
            title={text("3. Staff selection", "၃။ ဝန်ထမ်းရွေးချယ်ခြင်း")}
            description={text(
              "Select staff with checkboxes, keep stable row IDs across pages, and toggle optional columns.",
              "Checkbox ဖြင့် ဝန်ထမ်းရွေးပါ။ စာမျက်နှာပြောင်းသော်လည်း ID အလိုက် ရွေးချယ်မှုကို ထိန်းထားပြီး မလိုသောကော်လံများ ဖျောက်နိုင်ပါသည်။",
            )}
            code={exampleCode.staff[language]}
          >
            <StaffExample />
          </ExampleSection>
          <ExampleSection
            id="orders"
            title={text(
              "4. Order filters and details",
              "၄။ အော်ဒါ စစ်ထုတ်ခြင်းနှင့် အသေးစိတ်",
            )}
            description={text(
              "Filter orders by status, search by customer, and open an order's detail panel.",
              "အခြေအနေအလိုက် အော်ဒါစစ်ထုတ်ပါ၊ ဝယ်ယူသူအမည်ဖြင့် ရှာပါ၊ အော်ဒါအသေးစိတ်ကို ဖွင့်ကြည့်ပါ။",
            )}
            code={exampleCode.orders[language]}
          >
            <OrdersExample />
          </ExampleSection>
          <ExampleSection
            id="tasks"
            title={text(
              "5. Inline task updates",
              "၅။ ဇယားအတွင်း လုပ်ငန်းအခြေအနေ ပြောင်းခြင်း",
            )}
            description={text(
              "Change task status using a select input. The completed count updates immediately.",
              "Select မီနူးမှ လုပ်ငန်းအခြေအနေ ပြောင်းပါ။ ပြီးစီးသည့် အရေအတွက်ကို ချက်ချင်း ပြန်တွက်ပြပါသည်။",
            )}
            code={exampleCode.tasks[language]}
          >
            <TasksExample />
          </ExampleSection>
        </article>
      </main>
      <aside className="hidden min-w-0 xl:block">
        <div className="sticky top-24 border-l pl-5">
          <p className="mb-3 text-sm font-semibold">
            {text("On this page", "ဤစာမျက်နှာတွင်")}
          </p>
          <nav className="space-y-1">
            {[
              ["installation", text("Installation", "ထည့်သွင်းနည်း")],
              [
                "pagination-installation",
                text("Install Pagination", "Pagination ထည့်သွင်းနည်း"),
              ],
              ["import", text("Import", "Import လုပ်ခြင်း")],
              ["payments", text("Payments", "ငွေပေးချေမှု")],
              ["products", text("Products", "ကုန်ပစ္စည်း")],
              ["staff", text("Staff", "ဝန်ထမ်း")],
              ["orders", text("Orders", "အော်ဒါ")],
              ["tasks", text("Tasks", "လုပ်ငန်း")],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                className="block py-1.5 text-sm leading-7 text-muted-foreground hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}