import React, { ComponentProps } from "react";
import { NotePageProps } from "../../../utilityFunctions/formatting/formatNoteProps";
import { AdditionalComponents } from "@ulld/component-map/types";
import { serverClient } from "@ulld/api/serverClient";
import { FrontMatterType } from "@ulld/types";
import IndividualNoteContainer from "./individualNoteContainer";
import { MdxContentRSC } from "@ulld/render/mdx/rsc";
import grayMatter from "gray-matter";
import { notFound } from "next/navigation";
import serverLogger from "@ulld/logger/server";
import { ProvidedNoteDetailSheet } from "../../../types/general";

interface DatabaseMdxPageProps extends NotePageProps {
    embeddableComponents: AdditionalComponents;
    rootRelativePath: string;
    extension?: ".mdx" | ".md";
    NoteDetailSheet: ProvidedNoteDetailSheet;
}

const DatabaseMdxPage = async ({
    NoteDetailSheet,
    ...props
}: DatabaseMdxPageProps) => {

    let item = await serverClient.mdx.getDatabaseMdx(
        props.noteProps.rootRelativePathWithExtension ||
        `${props.noteProps.rootRelativePath}.mdx`,
    );

    console.log("item: ", item)


    if (!item) {
        return notFound();
    }

    let frontMatter = grayMatter(item.content);

    let details: ComponentProps<typeof IndividualNoteContainer>["details"] = {
        bookmarked: item?.bookmarked,
        quickLink: item.quickLink ? item.quickLink : undefined,
        id: item.id,
        sequentialKey: item.sequentialKey ? item.sequentialKey : undefined,
        sequentialIndex: item.sequentialIndex ? item.sequentialIndex : undefined,
        firstSync: item.firstSync.toString(),
        lastSync: item.lastSync.toString(),
    };

    let parsedData = await props.parsers.mdx.parser({
        content: frontMatter.content,
        data: frontMatter.data as Partial<FrontMatterType>,
        serverClient: serverClient,
        appConfig: props.parsers.mdx.appConfig,
        db: details,
        docTypeData: props.parsers.mdx.docTypeData,
    });

    serverLogger.debug(parsedData, {
        label: "Parsed Data",
        component: "DatabaseMdxPage",
        contentSyntaxType: "json",
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
                details={details}
                citations={item.citations}
                citationOrderList={item.citationsListOrder}
            >
                <MdxContentRSC
                    content={parsedData?.content || frontMatter.content}
                    components={props.embeddableComponents}
                    appConfig={props.parsers.mdx.appConfig}
                />
            </IndividualNoteContainer>
        </>
    );
};

DatabaseMdxPage.displayName = "DatabaseMdxPage";

export default DatabaseMdxPage;
