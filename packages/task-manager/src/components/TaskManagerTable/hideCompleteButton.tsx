"use client"
import { Button } from '@ulld/tailwind/button'
import { createPortal } from 'react-dom'



interface ToDoListHideCompletedButtonProps {
    toggleHidden: () => void
    showingHidden: boolean
    show: boolean
}


const HideCompletedButton = ({ showingHidden, toggleHidden }: ToDoListHideCompletedButtonProps) => {
    const handleHideCompletedTasks = () => {
        toggleHidden()
    }
    return (
        <Button
            onClick={handleHideCompletedTasks}
            variant={showingHidden ? "secondary" : "ghost"}
        >Hide Completed</Button>
    )
}


export const ToDoListHideCompletedButton = (props: ToDoListHideCompletedButtonProps) => {
    let em = typeof document === "undefined" ? null : document?.getElementById("todo-list-delete-slot")
    if (props.show && em) {
        return createPortal(<HideCompletedButton  {...props} />, em)
    }
    return null
}


ToDoListHideCompletedButton.displayName = "ToDoListHideCompletedButton"
