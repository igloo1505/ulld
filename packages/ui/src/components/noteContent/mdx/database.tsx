import React, { ComponentProps } from "react";
import { NotePageProps } from "../../../utilityFunctions/formatting/formatNoteProps";
import { AdditionalComponents } from "@ulld/component-map/types";
import { serverClient } from "@ulld/api/serverClient";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import { FrontMatterType } from "@ulld/types";
import IndividualNoteContainer from "./individualNoteContainer";
import grayMatter from "gray-matter";
import { notFound } from "next/navigation";

interface DatabaseMdxPageProps extends NotePageProps {
    embeddableComponents: AdditionalComponents;
    rootRelativePath: string;
    extension?: ".mdx" | ".md";
}

const DatabaseMdxPage = async (props: DatabaseMdxPageProps) => {
    let item = await serverClient.mdx.getDatabaseMdx(props.rootRelativePath);
    if (!item) {
        return notFound();
    }
    let frontMatter = grayMatter(item.content);

    let details: ComponentProps<typeof IndividualNoteContainer>["details"] = {
        bookmarked: item?.bookmarked,
        quickLink: item.quickLink,
        id: item.id,
        sequentialKey: item.sequentialKey,
        sequentialIndex: item.sequentialIndex,
        firstSync: item.firstSync,
        lastSync: item.lastSync,
    };

    let parsedData = await props.parsers.mdx.parser({
        content: item.content,
        data: frontMatter as Partial<FrontMatterType>,
        serverClient: serverClient,
        appConfig: props.parsers.mdx.appConfig,
        db: details,
        docTypeData: props.parsers.mdx.docTypeData,
    });

    return (
        <IndividualNoteContainer
            parsedData={parsedData.data || frontMatter}
            type="fs"
            details={details}
        >
            <MdxContentSERVER
                content={frontMatter.content}
                components={props.embeddableComponents}
                appConfig={props.parsers.mdx.appConfig}
            />
        </IndividualNoteContainer>
    );
};

DatabaseMdxPage.displayName = "DatabaseMdxPage";

export default DatabaseMdxPage;
