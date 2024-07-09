"use client";
import React, { useState, useRef } from "react";
import {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
} from "@ulld/tailwind/resizable";
import { CodeEditor } from "@ulld/editor/ide";
import {useResizeObserver} from "@ulld/hooks/useResizeObserver"
import {useEditorModalSyncedValue} from "@ulld/hooks/useEditorModalSyncedValue"
import { EditorLanguage, EditorLayout } from "@ulld/editor/editorTypes";
import { MdxLivePreviewPanel } from "@ulld/render/mdxPreviewPanel";
import { useEditorSaveListener } from "@ulld/hooks/useEditorSaveListener";

export interface EditorWithPreviewProps {
    localStorageKey: string;
    editorPadding?: number | {x: number, y: number}
    displayPanel?: React.FC<{content: string}>
    initialValue?: string
    language: EditorLanguage
}


export const EditorWithPreview = ({localStorageKey, editorPadding, displayPanel, initialValue, language}: EditorWithPreviewProps) => {
    const [internalValue, setInternalValue] = useEditorModalSyncedValue(localStorageKey, initialValue || "", undefined, {
        initialValueSource: "value"
    })
    const [panelDimensions, setPanelDimensions] = useState<{left: number, right: number}>({
        left: 50,
        right: 50
    });
    const Panel = displayPanel ? displayPanel : MdxLivePreviewPanel
    const editorXPadding = typeof editorPadding === "number" ? editorPadding : (editorPadding && "x" in editorPadding) ? editorPadding.x : 64
    const editorYPadding = typeof editorPadding === "number" ? editorPadding : (editorPadding && "y" in editorPadding) ? editorPadding.y : 32
    const parent = useRef<HTMLDivElement>(null!);
    const parentSize = useResizeObserver({
        ref: parent,
        box: "border-box"
    });
    const editorWidth = parentSize.width ? (parentSize.width * panelDimensions.left / 100) - editorXPadding : 0
    const editorHeight = parentSize.height ? parentSize.height - editorYPadding : 0
    const handleSave = () => {
        }

    useEditorSaveListener(handleSave, [])

    return (
        <div 
            className={"w-full h-full"}
            ref={parent}
        >
            <ResizablePanelGroup direction="horizontal" className={""}>
                <ResizablePanel 
                    className={"flex flex-col justify-start items-center"}
                    onResize={(l) => { 
                    setPanelDimensions({
                        left: l,
                        right: 100 - l
                    })
                }}>
                    <CodeEditor
                        width={editorWidth}
                        height={editorHeight}
                        language={language}
                        forceLanguage
                        layout={EditorLayout.modalPageFailedIntercept}
                        uniqueContentId={localStorageKey}
                    />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                    /* className={"flex flex-col justify-center items-center"} */
                >
                    <Panel
                       content={internalValue || ""} 
                    />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

EditorWithPreview.displayName = "EditorWithPreview";
