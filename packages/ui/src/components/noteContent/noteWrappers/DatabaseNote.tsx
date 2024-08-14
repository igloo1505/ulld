import React from "react";
import { PageContentContainer } from "../../layouts/contentContainer";
import { NotePageProps } from "../../../utilityFunctions/formatting/formatNoteProps";
import DatabaseMdxPage from "../mdx/database";
import DatabaseNotebook from "./database/remoteNotebook";
import { appData } from "@ulld/utilities/appData";

interface DatbaseNoteProps extends NotePageProps {
    rootRelativePath: string;
    rootRelativeWithExtension?: string;
    absolutePath?: string;
}

const DatabaseNote = async (props: DatbaseNoteProps) => {
    let nt = props.noteProps.format;
    if ([".mdx", ".md"].includes(nt)) {
        return (
            <PageContentContainer canBookmark>
                <DatabaseMdxPage {...props} />
            </PageContentContainer>
        );
    }

    if (nt === ".ipynb") {
        return (
            <PageContentContainer notebook canBookmark>
                <DatabaseNotebook
                    {...props}
                    rootRelativeWithExtension={
                        props.rootRelativeWithExtension || `${props.rootRelativePath}.ipynb`
                    }
                />
            </PageContentContainer>
        );
    }

    return (
        <div className={"text-2xl w-full text-center px-8 md:px-16"}>
            Oh no. This file type cannot be parsed yet. If you feel that this is an
            error, please submit an issue on{" "}
            <a href={appData.projectRepo.url} className={"text-link"}>
                Github
            </a>
            .
        </div>
    );
};

DatabaseNote.displayName = "RemoteNote";

export default DatabaseNote;
