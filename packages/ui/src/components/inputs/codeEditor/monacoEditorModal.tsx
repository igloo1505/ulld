"use client"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, Button } from '@ulld/tailwind/base';
import React, { KeyboardEvent, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import type { FullCodeEditorTextAreaProps } from './monacoEditor';
const FullCodeEditorTextArea = dynamic(() => import('./monacoEditor'), { ssr: false })
import styles from "./monacoModal.module.scss"
import clsx from 'clsx';
import { useComponentSize } from '@ulld/state';

export interface CodeEditorModalProps extends FullCodeEditorTextAreaProps {
    open: boolean
    title?: string
    close: () => void
    width?: number
    height?: number
    onAccept?: () => void
    acceptButtonText?: string
}


export const getLaunchCodeEditorOnKeydownListener = (onLaunch: () => void) => {
    return (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.shiftKey && e.metaKey) {
            onLaunch()
        }
    }
}

const CodeEditorModal = ({ open, close, title, onAccept, acceptButtonText, ...props }: CodeEditorModalProps) => {
    const { width, height, ..._props } = props
    const titleRef = useRef<HTMLDivElement>(null!)
    const [hasMounted, setHasMounted] = useState(false)
    const titleRect = useComponentSize(titleRef)
    const titleHeight = titleRect?.height || 0

    if (width) {
        // @ts-ignore
        _props.width = width - 48
    }
    if (height) {
        // @ts-ignore
        _props.height = height - 16 - titleHeight
    }


    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => newOpen ? {} : close()}
        >
            <DialogContent
                className={clsx("min-w-fit monacoModal", hasMounted ? "min-h-fit" : "min-h-[4rem]", title ? "hasTitle" : "noTitle", styles.monacoModalContent)}
                style={{
                    padding: 0,
                    ...(width && { width: `${width}px` }),
                    ...(height && { height: `${height}px` }),
                    ...(!title && {
                        paddingTop: "2rem"
                    }),
                }}
            >
                <DialogHeader>
                    {title && <DialogTitle ref={titleRef}>
                        {title || ""}
                    </DialogTitle>}
                </DialogHeader>
                <FullCodeEditorTextArea
                    {..._props}
                    asModalChild
                    editorDidMount={() => setHasMounted(true)}
                    options={{
                        ...props.options,
                        minimap: {
                            enabled: false,
                            ...props.options?.minimap,
                        },
                        lineNumbers: "relative",
                        automaticLayout: true,
                        wordWrap: "on",
                        acceptSuggestionOnCommitCharacter: false,
                        tabCompletion: "on",
                        tabFocusMode: true
                    }}
                />
            </DialogContent>
            {onAccept && (
                <DialogFooter>
                    <Button onClick={onAccept}>{acceptButtonText || "Accept"}</Button>
                </DialogFooter>
            )}
        </Dialog>
    )
}


CodeEditorModal.displayName = "CodeEditorModal"


export default CodeEditorModal;
