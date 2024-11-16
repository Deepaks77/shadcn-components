// payments/columns.tsx
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Trip = {
  tripNumber: string;
  pickUpLocation: string;
  date: string;
  time: string;
  account: string;
};

export const columns: ColumnDef<Trip>[] = [
  {
    accessorKey: "tripNumber",
    header: "Trip Number",
  },
  {
    accessorKey: "pickUpLocation",
    header: "Pick-up Location",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <button
        className="flex items-center text-left font-semibold text-gray-800"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => row.getValue("date"),
  },
  {
    accessorKey: "time",
    header: "Pick-up Time",
    cell: ({ row }) => row.getValue("time"),
  },
  {
    accessorKey: "account",
    header: "Account",
    cell: ({ row }) => (
      <a href="#" className="text-blue-500 underline">
        {row.getValue("account")}
      </a>
    ),
  },
];
