"use client"
import { DataTableDropdownCheckboxListInputProps } from '#/components/layout/uniqueLayouts/datatable/datatableFilterButton';
import FullDataTableDropdownCheckboxListInput from '#/components/layout/uniqueLayouts/datatable/fullDataTable/FullDataTableFilterButton';
import FullFormTagSubjectTopicComboBox, { FullFormTagSubjectTopicComboBoxProps } from '#/components/layout/uniqueLayouts/fullForm/fullFormTagTopicSubjectComboBox';
import { ToDoListStatus } from '@prisma/client';
import { Column, ColumnFiltersState } from '@tanstack/react-table';
import React from 'react'
import { FieldValues, Path } from 'react-hook-form';



interface ToDoListStatusSelectProps<T extends FieldValues, H extends HTMLElement> extends Partial<FullFormTagSubjectTopicComboBoxProps<T, H>>, Omit<DataTableDropdownCheckboxListInputProps<T>, "options" | "label" | "toggle" | "selectedIds"> {
    column: Column<T>
    columnFilters: ColumnFiltersState
    setColumnFilters: (filters: ColumnFiltersState) => void
    selectedIds: number[]
}


const ToDoListStatusSelect = <T extends FieldValues>(props: ToDoListStatusSelectProps<T, HTMLTextAreaElement>) => {
    if (props.selectedIds && props.selectedIds.length) {
        return (
            <FullFormTagSubjectTopicComboBox
                {...props}
                label={undefined}
                replaceUnderscores
                name={props.name as string || "status"}
                options={Object.keys(ToDoListStatus)}
                placeholder={"Status"}
                groupClasses={"max-h-[30vh] overflow-y-auto no-scrollbar"}
                displayTransform={(s) => s.replaceAll("_", " ")}
            />
        )
    }

    return (
        <FullDataTableDropdownCheckboxListInput
            {...props as any}
            options={Object.keys(ToDoListStatus).map((k) => ({
                label: k.replaceAll("_", " "),
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
