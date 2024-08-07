"use client";
import type shikiLanguages from "@ulld/utilities/shikiLanguages";
import { useShikiParse } from "@ulld/hooks/useShikiParse";
import { cn } from "@ulld/utilities/cn";
import { useEffect } from "react";

interface AddSnippetDisplayProps {
    content: string;
    language: (typeof shikiLanguages)[number];
}

const AddSnippetDisplay = ({ content, language }: AddSnippetDisplayProps) => {
    const data = useShikiParse(content, undefined, language);

    useEffect(() => {
        data.setContent(content);
    }, [content]);

    return (
        <div
            className={
                "w-full max-w-full h-full flex flex-col justify-center items-center gap-4 noScroll"
            }
        >
            {content.length === 0 && <h2 className={"text-lg"}>Output</h2>}
            <div
                className={cn(
                    "overflow-auto bg-background p-0 h-fit w-fit max-w-full max-h-full [&>pre]:w-fit",
                    content.length > 0 && "[&>pre]:p-4",
                )}
                dangerouslySetInnerHTML={{ __html: data.content || "" }}
            />
        </div>
    );
};

AddSnippetDisplay.displayName = "AddSnippetDisplay";

export default AddSnippetDisplay;
