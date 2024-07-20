import React from "react";
import { NotePageWrapperProps } from "../../../types/general";

const NotePageWrapper = ({ children }: NotePageWrapperProps) => {
    return <div className={"w-full inline-block min-h-full"}>{children}</div>;
};

NotePageWrapper.displayName = "NotePageWrapper";

export default NotePageWrapper;
