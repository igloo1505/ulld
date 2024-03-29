"use client";
import React, {useEffect} from "react";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";
import clsx from "clsx";
import { getClientComponentMap } from "../markdown/componentMapClient";

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
    const { value, setValue, Component } = useDebounceMdxParse(_content, debounceTimeout);

    useEffect(() => {
       setValue(_content) 
    }, [_content])

    return <div
        className={clsx("w-full h-full mdx p-4", center ? " flex flex-col justify-center items-center" : "relative inline-block")}
    >
        <Component
            components={getClientComponentMap(value)}
        />
    </div>;
};

MdxLivePreviewPanel.displayName = "MdxLivePreviewPanel";
