"use client"
import { Button } from '#/components/shad/ui/button'
import { client } from '#/trpc/client'
import React from 'react'
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


const ToDoListDeleteButton = (props: ToDoListDeleteButtonProps) => {
    let em = typeof document === "undefined" ? null : document?.getElementById("todo-list-delete-slot")
    if (em && props.selectedIds.length > 0) {
        return createPortal(<DeleteButton  {...props} />, em)
    }
    return null
}


ToDoListDeleteButton.displayName = "ToDoListDeleteButton"


export default ToDoListDeleteButton;
