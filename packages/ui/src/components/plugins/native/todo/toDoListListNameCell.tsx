import { Row } from '@tanstack/react-table'
import React from 'react'
import { TaskListIds } from './todoListDataTable'
import GeneralComboBox, { GeneralComboBoxProps } from '#/components/inputs/generalComboBox'
import { TodoTaskOutput } from '#/classes/prismaMdxRelations/zod/todo'



interface ToDoListDataTableListNameCellProps extends Omit<GeneralComboBoxProps<string>, "onChange" | "options"> {
    row: Row<TodoTaskOutput>
    lists: TaskListIds[]
    onChange: (newListId: number) => void
}

const ToDoListDataTableListNameCell = ({ row, lists, onChange, ...props }: ToDoListDataTableListNameCellProps) => {
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


export default ToDoListDataTableListNameCell;
