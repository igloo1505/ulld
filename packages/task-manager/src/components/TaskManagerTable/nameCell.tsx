"use client"
import { Row } from '@tanstack/react-table'
import React, { useEffect } from 'react'
import { TodoTaskOutput } from '@ulld/parsers/plugins/todos'
import { TaskListIds } from '@ulld/utilities/types/todos'
import { ComboboxInput, ComboboxInputProps } from "@ulld/full-form/combobox"
import { useFormContext } from '@ulld/full-form/form'


interface ToDoListDataTableListNameCellProps extends Omit<ComboboxInputProps<any, any>, "options" | "label" | "name"> {
    row: Row<TodoTaskOutput>
    lists: TaskListIds[]
    onChange: (newListId: number) => void
    name: string
    label?: string
}


export const ToDoListDataTableListNameCell = ({ row, lists, onChange, name, label, ...props }: ToDoListDataTableListNameCellProps) => {
    const form = useFormContext()
    let val = form.watch(name)

    useEffect(() => {
        onChange(val)
    }, [val])

    return (
        <ComboboxInput
            name={name}
            label={label || "List"}
            /* value={row.getValue("todoListLabel") as string | undefined} */
            options={lists.map((l) => {
                return {
                    value: l.label,
                    label: l.label
                }
            })}
            {...props}
        />
    )
}


ToDoListDataTableListNameCell.displayName = "ToDoListDataTableListNameCell"
