import dynamic from "next/dynamic";
import React from "react";
import { cookies } from "next/headers";
import { serverClient } from "@ulld/api/serverClient";
import { NotePageProps } from "../../../../utilityFunctions/formatting/formatNoteProps";
import { NotebookProps } from "@ulld/notebook/types";

interface FileSystemNotebookProps extends NotePageProps, NotebookProps {
    rootRelativeWithExtension: string;
    absolutePath: string;
    rootRelativePath: string;
    darkMode?: boolean;
}

/* /* NOTE: Might not want to return it as a blob or utf string if it's going to be directly interacting with the ipy kernel. */
const FileSystemNotebook = async (props: FileSystemNotebookProps) => {
    let data = await serverClient.notebook.getFsIpynb({
        absolutePath: props.absolutePath,
    });
    const darkMode = cookies().has("darkMode");

    /* const Notebook = dynamic(() => import("@ulld/notebook/notebook"), { ssr: false }) */
    /* <Notebook */
    /*     rootRelativePath={props.rootRelativeWithExtension} */
    /*     content={data} */
    /*     prefer="fs" */
    /*     initialDarkMode={darkMode} */
    /* /> */

    return <div className={""}>Fix this</div>;
};

FileSystemNotebook.displayName = "FileSystemNotebook";

export default FileSystemNotebook;
