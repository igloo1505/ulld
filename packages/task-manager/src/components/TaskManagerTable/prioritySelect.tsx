import { FullDataTableDropdownCheckboxListInput } from './filterDropdownCheckboxListInput';
import { SelectInput, SelectInputProps } from '@ulld/full-form/select';
import { Column, ColumnFiltersState } from '@tanstack/react-table';
import React from 'react'
import { FieldValues, Path } from 'react-hook-form';
import { priorityStrings } from "./staticData"
import { ToDoSearchParams } from '@ulld/parsers/plugins/todos';
import {DropdownOptionType} from "../../types"


interface ToDoListPrioritySelectProps<T extends FieldValues, H extends HTMLElement, L extends string> extends Partial<Omit<SelectInputProps<T>, "name">> {
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



const ToDoListPrioritySelect = <T extends FieldValues, L extends string>({ name, ...props }: ToDoListPrioritySelectProps<T, HTMLTextAreaElement, L>) => {

    if (props.selectedIds && props.selectedIds.length) {
        return (
            <SelectInput
                {...props}
                label={undefined}
                name={name as string || "priority"}
                options={priorityStrings.map((s) => ({
                    value: s,
                    label: s
                })}
                placeholder={"Priority"}
                classes={{
                    formItem: "max-h-[30vh] overflow-y-auto no-scrollbar"
                }}
                /* displayTransform={(s) => s.replaceAll("_", " ")} */
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
