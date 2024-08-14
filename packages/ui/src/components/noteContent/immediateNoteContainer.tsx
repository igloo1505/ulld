import React from "react";
import NoteContentObserver from "../observers/noteContentObserver";
import { getRandomId } from "@ulld/utilities/utils/identity";
import { noteContainerPrefix } from "@ulld/utilities/staticAppProperties/main";

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
            <div className={"note-base-layout py-8 space-y-2 md:space-y-3"} id={id}>
                {children ? children : <></>}
            </div>
        </>
    );
};

ImmediateNoteContentContainer.displayName = "ImmediateNoteContentContainer";
