import { serverLogger } from "@ulld/logger/server";
import React, { ComponentType } from "react";
import { NotePageProps } from "../../utilityFunctions/formatting/formatNoteProps";
import ResetPathDependentComponents from "../landing/hero/util/resetPathDependentComponents";
import DatabaseNote from "./noteWrappers/DatabaseNote";
import FsNote from "./noteWrappers/FsNote";
import { NoteDetailSheetProps } from '@ulld/navigation/types';

export const IndividualNoteSwitch = async (
    props: Omit<
        NotePageProps,
        | "noteType"
        | "rootRelativeWithExtension"
        | "absolutePath"
        | "rootRelativePath"
    > & {
        NoteDetailSheet: ComponentType<Omit<NoteDetailSheetProps, "docTypeData" | "noteProps">>
    }
) => {
    const { noteProps } = props;
    serverLogger.info(noteProps, {
        label: "Note Props",
        component: "IndividualNoteSwitch",
    });

    if (noteProps.useFs) {
        return (
            <>
                <ResetPathDependentComponents />
                <FsNote
                    {...props}
                    rootRelativeWithExtension={noteProps.rootRelativePathWithExtension}
                    absolutePath={noteProps.absolutePath}
                    rootRelativePath={noteProps.rootRelativePath}
                />
            </>
        );
    }

    return (
        <>
            <ResetPathDependentComponents />
            <DatabaseNote
                {...props}
                rootRelativeWithExtension={noteProps.rootRelativePathWithExtension}
                absolutePath={noteProps.absolutePath}
                rootRelativePath={noteProps.rootRelativePath}
            />
        </>
    );
};

IndividualNoteSwitch.displayName = "RemoteMdx";
