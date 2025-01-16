import { Button } from "@/components/ui/button";
import { sortingFns } from "@tanstack/react-table";
import { EarthIcon } from "lucide-react";
import SortingArrow from "./SortingArrow";

export const renderUserTableColumns = (openPlanetInfo) => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "height",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Height
          <SortingArrow sortDir={column.getIsSorted() === "asc"} />
        </Button>
      ),
      cell: ({ row }) => <span>{row.getValue("height")} cm</span>,
      sortingFn: (rowA, rowB) => {
        const heightA = Number(rowA.original.height);
        const heightB = Number(rowB.original.height);

        return heightA - heightB;
      },
    },
    {
      accessorKey: "mass",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mass
          <SortingArrow sortDir={column.getIsSorted()} />
        </Button>
      ),
      cell: ({ row }) => <span>{row.getValue("mass")} Kg</span>,
      sortingFn: (rowA, rowB) => {
        const massA = Number(rowA.original.mass);
        const massB = Number(rowB.original.mass);

        return massA - massB;
      },
    },
    {
      accessorKey: "created",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <SortingArrow sortDir={column.getIsSorted()} />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("created"));
        return (
          <span>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(date)}
          </span>
        );
      },
      sortingFns: sortingFns.date,
    },

    {
      accessorKey: "edited",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Edited
          <SortingArrow sortDir={column.getIsSorted()} />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("edited"));
        return (
          <span>
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(date)}
          </span>
        );
      },
      sortingFns: sortingFns.date,
    },
    {
      header: "",
      accessorKey: "homeworld",
      cell: ({ row }) => {
        return (
          <Button
            className="w-full"
            onClick={() => openPlanetInfo(row.getValue("homeworld"))}
          >
            <EarthIcon size={16} />
            View Planet
          </Button>
        );
      },
    },
  ];
};
