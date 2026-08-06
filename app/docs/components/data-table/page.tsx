"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { DataTable, DataTableSortButton } from "@/components/ui/data-table"

type Payment = { id: string; email: string; status: string; amount: number }

const payments: Payment[] = [
  { id: "pay_1", email: "ada@example.com", status: "Paid", amount: 249 },
  { id: "pay_2", email: "lin@example.com", status: "Pending", amount: 125 },
  { id: "pay_3", email: "grace@example.com", status: "Paid", amount: 499 },
]

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        aria-label="Select all rows"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(event) => table.toggleAllPageRowsSelected(event.target.checked)}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        aria-label={`Select ${row.original.email}`}
        checked={row.getIsSelected()}
        onChange={(event) => row.toggleSelected(event.target.checked)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  { accessorKey: "status", header: "Status" },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableSortButton onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Email <ArrowUpDown />
      </DataTableSortButton>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => <div className="text-right">${row.original.amount.toFixed(2)}</div>,
  },
]

export default function DataTablePage() {
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">Data Table</h1>
        <p className="mt-3 text-slate-500">Sorting, filtering, pagination, row selection, and column visibility powered by TanStack Table v8.</p>
      </header>
      <section className="rounded-2xl border p-5">
        <DataTable columns={columns} data={payments} filterColumn="email" filterPlaceholder="Filter emails..." getRowId={(row) => row.id} />
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100"><code>npx binhlaig-ui@latest add data-table</code></pre>
      </section>
    </article>
  )
}
