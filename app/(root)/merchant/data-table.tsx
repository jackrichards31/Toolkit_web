"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="w-2/3 rounded-md border p-5">
      <Tabs defaultValue="account" className="mb-4 w-1/2">
        <TabsList className="w-full">
          <TabsTrigger value="mid" className="w-full">
            MID
          </TabsTrigger>
          <TabsTrigger value="agent" className="w-full">
            Agent
          </TabsTrigger>
          <TabsTrigger value="processor" className="w-full">
            Processor
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mid">
          <h1 className="font-semibold">Merchant - Find (MID)</h1>
          <div
            data-orientation="horizontal"
            role="none"
            className="my-6 h-px shrink-0 bg-border"
          />
        </TabsContent>
        <TabsContent value="agent">
          <h1 className="font-semibold">Merchant - Find (Agent)</h1>
          <div
            data-orientation="horizontal"
            role="none"
            className="my-6 h-px shrink-0 bg-border"
          />
        </TabsContent>
        <TabsContent value="processor">
          <h1 className="font-semibold">Merchant - Find (Processor)</h1>
          <div
            data-orientation="horizontal"
            role="none"
            className="my-6 h-px shrink-0 bg-border"
          />
        </TabsContent>
      </Tabs>

      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("email")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />
        {/* Column visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((item) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={item.id}
                    className="capitalize"
                    checked={item.getIsVisible()}
                    onCheckedChange={(value) => item.toggleVisibility(!!value)}
                  >
                    {item.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((item) => (
              <TableRow key={item.id}>
                {item.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((rows) => (
                <TableRow
                  key={rows.id}
                  data-state={rows.getIsSelected() && "selected"}
                >
                  {rows.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanNextPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
