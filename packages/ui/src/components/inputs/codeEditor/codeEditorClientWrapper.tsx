"use client"
import React, { useEffect, useState } from 'react'
import CodeEditorModal, { CodeEditorModalProps } from './monacoEditorModal'
import { client } from '@ulld/api'
import { toast } from '@ulld/tailwind'


type J = string | number
const codeEditorModalActions = {
    editNoteById: async (itemId: J, val: string | null) => {
        let res = await client.toDo.editTaskNote.mutate({
            taskId: typeof itemId === "string" ? parseInt(itemId) : itemId as number,
            note: val
        })
        if (res) {
            toast({
                title: "Success",
                description: `Your note has been added to that note.`
            })
        }
    }
}

interface CodeEditorModalClientWrapperProps<T extends J> extends Omit<CodeEditorModalProps, "open" | "close" | "value" | "onChange"> {
    action: keyof typeof codeEditorModalActions
    itemId: T
    initialValue?: string
    appendClickListenerId?: string
    isModalChild?: boolean
}


const CodeEditorModalClientWrapper = <T extends string | number>(props: CodeEditorModalClientWrapperProps<T>) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(props.initialValue)

    const escapeKeyboardListener = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault()
            e.stopPropagation()
        }
    }

    const openModal = () => setOpen(true)

    const appendKeypressListener = () => {
        document.addEventListener("keydown", escapeKeyboardListener)
    }
    const appendClickListener = (id: string) => {
        document.getElementById(id)?.addEventListener("click", openModal)
    }

    useEffect(() => {
        if (props.appendClickListenerId) {
            appendClickListener(props.appendClickListenerId)
        }
        if (props.isModalChild) {
            appendKeypressListener()
        }
        return () => {
            document.removeEventListener("keydown", escapeKeyboardListener)
        }
    }, [props.appendClickListenerId])
    return (
        <CodeEditorModal
            {...props}
            open={open}
            close={() => setOpen(false)}
            value={value || ""}
            onChange={(val) => setValue(val)}
        />
    )
}


CodeEditorModalClientWrapper.displayName = "CodeEditorModalClientWrapper"


export default CodeEditorModalClientWrapper;
