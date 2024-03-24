import { Column, ColumnFiltersState } from '@tanstack/react-table';
import React from 'react'
import { FieldValues, Path } from 'react-hook-form';
import { TaggableComboBox } from '@ulld/full-form/taggableCombobox';
import { FullDataTableDropdownCheckboxListInput } from '../../../tables/datatable/fullDataTable/FullDataTableFilterButton';
import { replaceRecursively } from "@ulld/utilities/utils/general";
import { ToDoSearchParams } from '@ulld/parsers/plugins/todos';
import {  SelectInputProps } from '@ulld/full-form/select';
import { DropdownOptionType } from '../../../tables/datatable/datatableFilterButton';


interface ToDoListPrioritySelectProps<T extends FieldValues, H extends HTMLElement, L extends string> extends Partial<Omit<SelectInputProps<T, H, L>, "name">> {
    name?: string
    column: Column<T>
    columnFilters: ColumnFiltersState
    setColumnFilters: (filters: ColumnFiltersState) => void
    activePriorities: string[]
    selectedIds: number[]
    searchParams: ToDoSearchParams
    toggle: (val: DropdownOptionType) => void
    icon?: React.FC<{ className?: string }>
}


export const priorityStrings = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]


const ToDoListPrioritySelect = <T extends FieldValues, L extends string>({ name, ...props }: ToDoListPrioritySelectProps<T, HTMLTextAreaElement, L>) => {

    if (props.selectedIds && props.selectedIds.length) {
        return (
            <TaggableComboBox
                {...props}
                label={undefined}
                replaceUnderscores
                name={name as string || "priority"}
                options={priorityStrings}
                placeholder={"Priority"}
                groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"}
                displayTransform={(s) => replaceRecursively(s, "_", " ")}
            />
        )
    }

    return (
        <FullDataTableDropdownCheckboxListInput
            {...props as any}
            options={priorityStrings.map((k) => ({
                label: k,
                name: k as NonNullable<Path<T>>,
                id: k
            }))}
            selectedIds={props.activePriorities}
        />
    )
}


ToDoListPrioritySelect.displayName = "ToDoListPrioritySelect"


export default ToDoListPrioritySelect;
