"use client"

import * as React from "react"
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type RowSelectionState,
  type SortingState,
  type Table as TanStackTable,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type DataTableProps<TData, TValue> = {
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
  emptyMessage = "No results found.",
  getRowId,
  enableRowSelection = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] =
    React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] =
    React.useState<RowSelectionState>({})

  const resolvedSearchKey =
    searchKey ?? filterColumn

  const resolvedSearchPlaceholder =
    searchPlaceholder ??
    filterPlaceholder ??
    "Search..."

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
    onColumnVisibilityChange:
      setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:
      getFilteredRowModel(),
    getSortedRowModel:
      getSortedRowModel(),
    getPaginationRowModel:
      getPaginationRowModel(),
  })

  const searchColumn = resolvedSearchKey
    ? table.getColumn(resolvedSearchKey)
    : undefined

  return (
    <div
      data-slot="data-table"
      className="w-full space-y-4"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {searchColumn ? (
          <div className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={
                (searchColumn.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                searchColumn.setFilterValue(
                  event.target.value
                )
              }
              placeholder={
                resolvedSearchPlaceholder
              }
              className="pl-9"
            />
          </div>
        ) : (
          <div />
        )}

        <DataTableColumnVisibility
          table={table}
        />
      </div>

      <div className="overflow-hidden rounded-xl border bg-background">
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b bg-muted/40">
              {table
                .getHeaderGroups()
                .map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header) => (
                        <th
                          key={header.id}
                          className="h-11 whitespace-nowrap px-4 text-left align-middle text-xs font-medium text-muted-foreground"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column
                                  .columnDef
                                  .header,
                                header.getContext()
                              )}
                        </th>
                      )
                    )}
                  </tr>
                ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table
                  .getRowModel()
                  .rows.map((row) => (
                    <tr
                      key={row.id}
                      data-state={
                        row.getIsSelected()
                          ? "selected"
                          : undefined
                      }
                      className="border-b transition-colors last:border-0 hover:bg-muted/40 data-[state=selected]:bg-muted"
                    >
                      {row
                        .getVisibleCells()
                        .map((cell) => (
                          <td
                            key={cell.id}
                            className="whitespace-nowrap px-4 py-3 align-middle"
                          >
                            {flexRender(
                              cell.column
                                .columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                    </tr>
                  ))
              ) : (
                <tr>
                  <td
                    colSpan={
                      table.getVisibleLeafColumns()
                        .length
                    }
                    className="h-28 text-center text-muted-foreground"
                  >
                    {emptyMessage}
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

function DataTableColumnHeader<
  TData,
  TValue,
>({
  column,
  title,
  className,
}: {
  column: Column<TData, TValue>
  title: string
  className?: string
}) {
  if (!column.getCanSort()) {
    return (
      <span className={className}>
        {title}
      </span>
    )
  }

  const direction =
    column.getIsSorted()

  return (
    <button
      type="button"
      onClick={() =>
        column.toggleSorting(
          direction === "asc"
        )
      }
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md py-1 text-left hover:text-foreground",
        className
      )}
    >
      {title}

      <ChevronDown
        className={cn(
          "size-3.5 transition-transform",
          direction === "asc" &&
            "rotate-180",
          !direction && "opacity-40"
        )}
      />
    </button>
  )
}

function DataTableSortButton({
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md py-1 text-left",
        "text-xs font-medium text-muted-foreground",
        "transition hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
        className
      )}
      {...props}
    />
  )
}

function DataTableSelectAll<TData>({
  table,
}: {
  table: TanStackTable<TData>
}) {
  const checked =
    table.getIsAllPageRowsSelected()

  const indeterminate =
    table.getIsSomePageRowsSelected() &&
    !checked

  return (
    <input
      type="checkbox"
      aria-label="Select all rows"
      checked={checked}
      ref={(element) => {
        if (element) {
          element.indeterminate =
            indeterminate
        }
      }}
      onChange={
        table.getToggleAllPageRowsSelectedHandler()
      }
      className="size-4 rounded border-input accent-primary"
    />
  )
}

function DataTableSelectRow<TData>({
  row,
}: {
  row: Row<TData>
}) {
  return (
    <input
      type="checkbox"
      aria-label="Select row"
      checked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      onChange={
        row.getToggleSelectedHandler()
      }
      className="size-4 rounded border-input accent-primary"
    />
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
        Columns
      </summary>

      <div className="absolute right-0 z-20 mt-2 min-w-48 rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !==
                "undefined" &&
              column.getCanHide()
          )
          .map((column) => (
            <label
              key={column.id}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-muted"
            >
              <input
                type="checkbox"
                checked={
                  column.getIsVisible()
                }
                onChange={
                  column.getToggleVisibilityHandler()
                }
                className="size-4 rounded border-input accent-primary"
              />

              <span className="capitalize">
                {column.id.replaceAll(
                  "_",
                  " "
                )}
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
  const selectedCount =
    table.getFilteredSelectedRowModel()
      .rows.length

  const totalCount =
    table.getFilteredRowModel()
      .rows.length

  const currentPage =
    table.getState().pagination
      .pageIndex + 1

  const pageCount = Math.max(
    table.getPageCount(),
    1
  )

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        {selectedCount} of {totalCount}{" "}
        row(s) selected.
      </p>

      <div className="flex items-center gap-2">
        <span className="mr-2 text-sm text-muted-foreground">
          Page {currentPage} of {pageCount}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            table.setPageIndex(0)
          }
          disabled={
            !table.getCanPreviousPage()
          }
          aria-label="First page"
        >
          <ChevronsLeft className="size-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            table.previousPage()
          }
          disabled={
            !table.getCanPreviousPage()
          }
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            table.nextPage()
          }
          disabled={
            !table.getCanNextPage()
          }
          aria-label="Next page"
        >
          <ChevronRight className="size-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            table.setPageIndex(
              Math.max(
                table.getPageCount() - 1,
                0
              )
            )
          }
          disabled={
            !table.getCanNextPage()
          }
          aria-label="Last page"
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}

export {
  DataTable,
  DataTableColumnHeader,
  DataTableColumnVisibility,
  DataTablePagination,
  DataTableSelectAll,
  DataTableSelectRow,
  DataTableSortButton,
}