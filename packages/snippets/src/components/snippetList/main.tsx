import React from "react";
import { SnippetListInternalProps } from "../../types";
import SnippetItem from "./snippetItem";
import { cn } from "@ulld/utilities/cn";

interface SnippetListProps extends SnippetListInternalProps { }

const SnippetList = ({ snippets = [] }: SnippetListProps) => {
    return (
        <div
            className={
                "w-full h-fit flex flex-col justify-center items-center gap-4 mt-3"
            }
        >
            {snippets.map((s) => (
                <SnippetItem key={s.id} item={s} />
            ))}
            <div
                className={cn(
                    "w-full text-center text-semibold text-lg",
                    snippets.length > 0 && "hidden",
                )}
            >
                No snippets found
            </div>
        </div>
    );
};

SnippetList.displayName = "SnippetList";

export default SnippetList;
