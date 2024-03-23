"use client";
import React, {useEffect} from "react";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import clsx from "clsx";

interface MdxLivePreviewPanelProps {
    content: string;
    debounceTimeout?: number; // 300ms by default
    center?: boolean
}

export const MdxLivePreviewPanel = ({
    content: _content,
    debounceTimeout = 300,
    center=false
}: MdxLivePreviewPanelProps) => {

    const { value, setValue, Content } = useDebounceMdxParse(_content, debounceTimeout);

    useEffect(() => {
       setValue(_content) 
    }, [_content])

    return <div
        className={clsx("w-full h-full", center ? " flex flex-col justify-center items-center" : "relative inline-block")}
    >
        <Content/>
    </div>;
};

MdxLivePreviewPanel.displayName = "MdxLivePreviewPanel";
