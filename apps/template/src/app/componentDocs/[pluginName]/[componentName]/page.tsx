import ComponentDocPageWrapperTemplate from "#/components/slots/ui/componentDocumentationPageWrapper";
import React from "react";
import { MdxContentSERVER } from "@ulld/render/mdx/server";
import { getContentHeadings } from "@ulld/utilities/getMarkdownHeadings";
import buildData from "buildData";
import appConfig from "appConfig";
import { getPluginDocContentByIds } from "@ulld/utilities/componentDocsPathUtils";
import { notFound } from "next/navigation";
import NoteDetailsSheetTemplate from "#/components/slots/navigation/noteDetailSheet";
import { BuildStaticDataOutput } from "@ulld/types";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface ComponentDocumentationPageProps {
    params: {
        pluginName: string;
        componentName: string;
    };
    searchParams: {
        full?: string;
    };
}

const ComponentDocumentationPage = async ({
    params,
    searchParams,
    ...props
}: ComponentDocumentationPageProps) => {
    const { pluginName, componentName } = params;
    let isFull = searchParams.full === "false" ? false : true;
    let data = await getPluginDocContentByIds(
        buildData as unknown as BuildStaticDataOutput,
        pluginName,
        componentName,
        isFull,
    );
    if (!data || !data.content) {
        return notFound();
    }
    return (
        <>
            <DisableBookmark />
            <ComponentDocPageWrapperTemplate
                {...params}
                toc={NoteDetailsSheetTemplate}
                item={data.item}
                headings={getContentHeadings(data.content)}
            >
                <MdxContentSERVER
                    content={data.content}
                    appConfig={appConfig as AppConfigSchemaOutput}
                />
            </ComponentDocPageWrapperTemplate>
        </>
    );
};

ComponentDocumentationPage.displayName = "ComponentDocumentationPage";

export default ComponentDocumentationPage;
