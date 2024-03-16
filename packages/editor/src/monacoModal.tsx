"use client"
import React, { useEffect, useState } from 'react'
import CodeEditor, { CodeEditorProps, EditorLayout } from './monaco'
import { useIsomorphicLayoutEffect } from '#/hooks/useIsomorphicLayoutEffect'

type P<T extends string, J extends EditorLayout> = Omit<React.HTMLProps<HTMLDivElement>, "onChange" | "value"> & Omit<CodeEditorProps<T, J>, "value" | "onChange" | "onAccept">


interface MonacoEditorModalProps {
    className?: string
    useExisting?: boolean
}

export const formatEditorContentStorageKey = (baseKey: string | number) => `ulld-editor-${baseKey}`

export const clearStorageFromKey = (baseKey: string | number) => {
    window?.localStorage.removeItem(formatEditorContentStorageKey(baseKey))
}

export const storeEditorModalContentForKey = (baseKey: string | number, content: string) => {
    window?.localStorage.setItem(formatEditorContentStorageKey(baseKey), content)
}

export const getEditorContentFromKey = (baseKey: string) => window?.localStorage.getItem(formatEditorContentStorageKey(baseKey))

const MonacoEditorModal = <T extends string, J extends (EditorLayout.modal | EditorLayout.fullSizeModal)>({ className, useExisting, ...props }: MonacoEditorModalProps & P<T, J>) => {
    if (!open) return null
    const [value, setValue] = useState("")
    const handleBackdropClick = () => {
        close()
    }
    console.log("props.uniqueContentId: ", props.uniqueContentId)

    const handleChange = (newValue: string) => {
        console.log("newValue: ", newValue)
        storeEditorModalContentForKey(props.uniqueContentId, newValue)
    }

    useIsomorphicLayoutEffect(() => {
        if (useExisting) {
            let storedValue = getEditorContentFromKey(props.uniqueContentId)
            setValue(storedValue || "")
        } else {
            clearStorageFromKey(props.uniqueContentId)
        }
    }, [useExisting])

    const fullSizeClasses = "fixed h-screen w-full top-0 left-0 right-0 bottom-0 "

    return (
        <div
            className={"flex flex-col justify-center items-center bg-popover bg-opacity-50"}
            onClick={handleBackdropClick}
        >
            <CodeEditor
                {...props}
                asModalChild
                onChange={handleChange}
            />
        </div>
    )
}


MonacoEditorModal.displayName = "MonacoEditorModal"


export default MonacoEditorModal;
