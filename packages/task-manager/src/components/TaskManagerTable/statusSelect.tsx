"use client"
import React from 'react'
import { ToDoListStatus } from '@ulld/database';
import { Column, ColumnFiltersState } from '@tanstack/react-table';
import { FieldValues, Path } from 'react-hook-form';
import { FullDataTableDropdownCheckboxListInput } from './filterDropdownCheckboxListInput';
import { replaceRecursively } from "@ulld/utilities/utils/general";
import { DataTableDropdownCheckboxListInputProps } from '../../types';

type FullFormTagSubjectTopicComboBoxProps<T extends FieldValues, H extends HTMLElement> =  any

interface ToDoListStatusSelectProps<T extends FieldValues, H extends HTMLElement> extends Partial<FullFormTagSubjectTopicComboBoxProps<T, H>>, Omit<DataTableDropdownCheckboxListInputProps<T>, "options" | "label" | "toggle" | "selectedIds"> {
    column: Column<T>
    columnFilters: ColumnFiltersState
    setColumnFilters: (filters: ColumnFiltersState) => void
    selectedIds: number[]
}


/* FIX: Missing FullFormTagSubjectTopicComboBox after moving to  mono-repo and before moving all full-form components. Adjust this when the new full-form is completely handled. */
const ToDoListStatusSelect = <T extends FieldValues>(props: ToDoListStatusSelectProps<T, HTMLTextAreaElement>) => {
    /* if (props.selectedIds && props.selectedIds.length) { */
    /*     return ( */
    /*         <FullFormTagSubjectTopicComboBox */
    /*             {...props} */
    /*             label={undefined} */
    /*             replaceUnderscores */
    /*             name={props.name as string || "status"} */
    /*             options={Object.keys(ToDoListStatus)} */
    /*             placeholder={"Status"} */
    /*             groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"} */
    /*             displayTransform={(s) => replaceRecursively(s, "_", " ")} */
    /*         /> */
    /*     ) */
    /* } */

    return (
        <FullDataTableDropdownCheckboxListInput
            {...props as any}
            options={Object.keys(ToDoListStatus).map((k) => ({
                label: k === "ToDo" ? "To Do" : replaceRecursively(k, "_", " "),
                name: k as NonNullable<Path<T>>
            }))}
            toggle={(name: string) => {
                let isActive = props.columnFilters.map((f) => f.value).includes(name)
                const defVal = {
                    id: "status",
                    value: name
                }
                let v = isActive ? props.columnFilters.filter(a => !Boolean(a.value === name && a.id === "status")) : [...props.columnFilters, defVal]
                props.setColumnFilters(v)
            }}
        />
    )

}


ToDoListStatusSelect.displayName = "ToDoListStatusSelect"


export default ToDoListStatusSelect;
