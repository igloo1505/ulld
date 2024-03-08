import { Table } from "@tanstack/react-table";
import { Path } from "react-hook-form";

export interface DataTableBaseProps<T extends unknown> {
    table: Table<T>
    label?: string | Path<T>
    placeholder?: string
}
