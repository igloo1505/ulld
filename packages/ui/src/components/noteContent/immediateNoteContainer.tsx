import React from "react";
import NoteContentObserver from "../observers/noteContentObserver";
import { getRandomId } from "@ulld/utilities/utils/identity";
import { noteContainerPrefix } from "@ulld/utilities/staticAppProperties/main";
import MathjaxProvider from "@ulld/utilities/providers-mathjax";

interface ImmediateNoteContentContainerProps {
    children: React.ReactNode;
}

export const ImmediateNoteContentContainer = ({
    children,
}: ImmediateNoteContentContainerProps) => {
    const id = `${noteContainerPrefix}${getRandomId(8)}`;
    return (
        <>
            <NoteContentObserver id={id} />
            <div
                className={
                    "note-base-layout prose-all @container/mdx py-8 md:py-16 space-y-2 md:space-y-3"
                }
                id={id}
            >
                <MathjaxProvider>{children ? children : <></>}</MathjaxProvider>
            </div>
        </>
    );
};

ImmediateNoteContentContainer.displayName = "ImmediateNoteContentContainer";
