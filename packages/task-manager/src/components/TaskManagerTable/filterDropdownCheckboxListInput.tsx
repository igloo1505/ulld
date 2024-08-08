import { ColumnFiltersState } from "@tanstack/react-table";
import { ToDoSearchParams } from "@ulld/parsers/plugins/todos";
import { DataTableBaseProps, DropdownOptionType } from "../../types";
import { DataTableDropdownCheckboxListInput } from "./dataTableDropdownCheckboxListInput";

export interface Props<T extends unknown> extends DataTableBaseProps<T> {
    options: DropdownOptionType[];
    toggle: (item: DropdownOptionType) => void;
    selectedIds: number[];
    columnFilters: ColumnFiltersState;
    setColumnFilters: (filters: ColumnFiltersState) => void;
    searchParams: ToDoSearchParams;
    hideAddListButton?: boolean
}

export const FullDataTableDropdownCheckboxListInput = <T extends unknown>(
    props: Props<T>,
) => {
    return (
        <DataTableDropdownCheckboxListInput
            {...props}
            clear={() => props.setColumnFilters([])}
        />
    );
};

FullDataTableDropdownCheckboxListInput.displayName =
    "DataTableDropdownCheckboxListInput";
