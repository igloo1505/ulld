"use client"
import { client } from '@ulld/api'
import React from 'react'
import { Button } from '@ulld/tailwind/base'
import { createPortal } from 'react-dom'



interface ToDoListDeleteButtonProps {
    selectedIds: number[]
    onRemove: (ids: number[]) => void
}


const DeleteButton = ({ selectedIds, onRemove }: ToDoListDeleteButtonProps) => {
    const handleDeleteTasks = async () => {
        let res = await client.toDo.deleteToDos.mutate(selectedIds)
        if (res) {
            onRemove(selectedIds)
        }
    }
    return (
        <Button onClick={handleDeleteTasks} variant="destructive">Delete</Button>
    )
}


export const ToDoListDeleteButton = (props: ToDoListDeleteButtonProps) => {
    let em = typeof document === "undefined" ? null : document?.getElementById("todo-list-delete-slot")
    if (em && props.selectedIds.length > 0) {
        return createPortal(<DeleteButton  {...props} />, em)
    }
    return null
}


ToDoListDeleteButton.displayName = "ToDoListDeleteButton"
