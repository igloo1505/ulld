import React from 'react'
import { ColumnFiltersState } from '@tanstack/react-table';
import { DataTableBaseProps } from '../dataTableBaseProps';
import DataTableDropdownCheckboxListInput, { DropdownOptionType } from '../datatableFilterButton';
import { ToDoSearchParams } from '@ulld/parsers';


export interface Props<T extends unknown> extends DataTableBaseProps<T> {
    options: DropdownOptionType[]
    toggle: (item: DropdownOptionType) => void
    selectedIds: number[]
    columnFilters: ColumnFiltersState
    setColumnFilters: (filters: ColumnFiltersState) => void
    searchParams: ToDoSearchParams
}


const FullDataTableDropdownCheckboxListInput = <T extends unknown>(props: Props<T>) => {

    return (
        <DataTableDropdownCheckboxListInput
            {...props}
            clear={() => props.setColumnFilters([])}
        />
    )
}


FullDataTableDropdownCheckboxListInput.displayName = "DataTableDropdownCheckboxListInput"


export default FullDataTableDropdownCheckboxListInput;
