import { AdditionalComponents } from "@ulld/component-map/types";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import React from "react";
import IndividualNoteContainer from "./individualNoteContainer";
import { serverClient } from "@ulld/api/serverClient";
import grayMatter from "gray-matter";
import { NotePageProps } from "../../../utilityFunctions/formatting/formatNoteProps";
import { FrontMatterType } from "@ulld/types";
import { ProvidedNoteDetailSheet } from "../../../types/general";

interface FileSystemMdxProps extends NotePageProps {
    embeddableComponents: AdditionalComponents;
    rootRelativePath: string;
    extension?: ".mdx" | ".md";
    NoteDetailSheet: ProvidedNoteDetailSheet;
}

const FileSystemMdxPage = async ({
    NoteDetailSheet,
    ...props
}: FileSystemMdxProps) => {
    let fileContent = await serverClient.mdx.getFsMdx({
        rootRelativePath:
            props.rootRelativeWithExtension ||
            `${props.rootRelativePath}${props.extension || ".mdx"}`,
        extension: props.extension || ".mdx",
    });

    let frontMatter = grayMatter(fileContent.content);

    let parsedData = await props.parsers.mdx.parser({
        content: frontMatter.content,
        data: frontMatter.data as Partial<FrontMatterType>,
        serverClient: serverClient,
        appConfig: props.parsers.mdx.appConfig,
        db: fileContent.details,
        docTypeData: props.parsers.mdx.docTypeData,
    });

    return (
        <>
            <NoteDetailSheet
                format="mdx"
                rawContent={parsedData?.content || frontMatter.content}
            />
            <IndividualNoteContainer
                parsedData={parsedData.data || frontMatter}
                type="fs"
                details={fileContent.details}
                citations={(parsedData.data as any)?.citations || []}
                citationOrderList={(parsedData.data as any)?.citationsListOrder || []}
            >
                <MdxContentSERVER
                    content={parsedData?.content || frontMatter.content}
                    components={props.embeddableComponents}
                    appConfig={props.parsers.mdx.appConfig}
                />
            </IndividualNoteContainer>
        </>
    );
};

FileSystemMdxPage.displayName = "FileSystemMdx";

export default FileSystemMdxPage;
