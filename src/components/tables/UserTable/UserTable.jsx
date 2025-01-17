"use client";

import { useEffect, useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { renderUserTableColumns } from "./UserTable.config";
import api from "@/services/api";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";

const UserTable = ({ openPlanetInfo }) => {
  const [triggerGetPeople, { data, isFetching }] =
    api.endpoints.getPeople.useLazyQuery();
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const columns = useMemo(
    () => renderUserTableColumns(openPlanetInfo, sorting),
    [openPlanetInfo, sorting]
  );

  const table = useReactTable({
    data: data?.results ?? [],
    columns,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    rowCount: data?.count ?? 0,
    manualPagination: true,
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

  useEffect(() => {
    toast.promise(triggerGetPeople({ page: pagination.pageIndex + 1 }), {
      error: "Failed to fetch people",
    });
  }, [pagination.pageIndex, triggerGetPeople]);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border relative overflow-auto">
        {isFetching && (
          <div className="absolute z-20 inset-0 w-full h-full flex items-center backdrop-blur-sm bg-background/10 justify-center">
            <LoaderCircleIcon className="animate-spin h-8 w-8" />
          </div>
        )}
        <Table className="min-w-[900px]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                columns={headerGroup.headers.length}
              >
                {headerGroup.headers.map((header) => {
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
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} columns={row.getVisibleCells().length}>
                  {row.getVisibleCells().map((cell) => (
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
                <TableCell className="px-4 py-12 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {(pagination.pageIndex + 1) * pagination.pageSize <
          table.getRowCount()
            ? (pagination.pageIndex + 1) * pagination.pageSize
            : table.getRowCount()}{" "}
          of {table.getRowCount()} people.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
