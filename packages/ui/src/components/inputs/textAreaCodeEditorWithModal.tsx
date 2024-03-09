"use client"
import React, { useState } from 'react'
import TextAreaCodeEditor, { TextAreaCodeEditorProps } from './textAreaCodeEditor';
import { FullCodeEditorTextAreaProps } from './codeEditor/monacoEditor';
import CodeEditorModal, { getLaunchCodeEditorOnKeydownListener } from './codeEditor/monacoEditorModal';
import { useViewport } from '@ulld/state';


interface TextAreaCodeEditorWithMonacoModalProps extends Omit<TextAreaCodeEditorProps<NonNullable<FullCodeEditorTextAreaProps["language"]>>, "width" | "height"> {
    monaco?: FullCodeEditorTextAreaProps
    maxWidth?: number
    maxHeight?: number
}

export const TextAreaCodeEditorWithMonacoModal = ({ monaco, maxWidth, maxHeight, ...props }: TextAreaCodeEditorWithMonacoModalProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const vp = useViewport()
    const wdims: number[] = []
    const hdims: number[] = []
    if (vp) {
        wdims.push(vp.window.width - 48)
        hdims.push(vp.window.height - 48)
    }
    if (maxWidth) {
        wdims.push(maxWidth)
    }
    if (maxHeight) {
        wdims.push(maxHeight)
    }
    if (!maxWidth) {
        wdims.push(window?.innerWidth || 768)
    }
    if (!maxHeight) {
        hdims.push(window?.innerHeight || 600)
    }
    const modalDims = {
        width: Math.min(...wdims),
        height: Math.min(...hdims),
    }
    return (
        <>
            <CodeEditorModal
                open={modalOpen}
                value={props.value}
                onChange={props.onChange}
                close={() => setModalOpen(false)}
                {...modalDims}
            />
            <TextAreaCodeEditor
                {...props}
                editor={{
                    ...props?.editor,
                    onKeyDown: getLaunchCodeEditorOnKeydownListener(() => setModalOpen(true))
                }}
            />
        </>
    )
}


TextAreaCodeEditorWithMonacoModal.displayName = "TextAreaCodeEditorWithMonacoModal"
