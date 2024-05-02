import React from "react";
import clsx from "clsx";
import { MdxContentCLIENT } from "./mdxContentCLIENT";

interface MdxLivePreviewPanelProps {
    content: string;
    debounceTimeout?: number; // 300ms by default
    center?: boolean
}

export const MdxLivePreviewPanel = ({
    content,
    debounceTimeout = 300,
    center=false
}: MdxLivePreviewPanelProps) => {

    return <div
        className={clsx("w-full h-full mdx p-4", center ? " flex flex-col justify-center items-center" : "relative inline-block")}
    >
        <MdxContentCLIENT 
            content={content}
            debounceTimeout={debounceTimeout}
        />
    </div>;
};

MdxLivePreviewPanel.displayName = "MdxLivePreviewPanel";
