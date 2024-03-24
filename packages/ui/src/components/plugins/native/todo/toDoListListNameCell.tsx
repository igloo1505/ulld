import { Row } from '@tanstack/react-table'
import React from 'react'
import GeneralComboBox, { GeneralComboBoxProps } from '../../../inputs/generalComboBox'
import { TodoTaskOutput } from '@ulld/parsers/plugins/todos'
import { TaskListIds } from '@ulld/utilities/types/todos'



interface ToDoListDataTableListNameCellProps extends Omit<GeneralComboBoxProps<string>, "onChange" | "options"> {
    row: Row<TodoTaskOutput>
    lists: TaskListIds[]
    onChange: (newListId: number) => void
}

export const ToDoListDataTableListNameCell = ({ row, lists, onChange, ...props }: ToDoListDataTableListNameCellProps) => {
    return (
        <GeneralComboBox
            onChange={(listName: string) => {
                const selectedList = lists.find((l) => l.label.toLowerCase() === listName.toLowerCase())?.id
                if (selectedList) {
                    onChange(selectedList)
                }
            }}
            value={row.getValue("todoListLabel") as string | undefined}
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
