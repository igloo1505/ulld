import path from "path";
import fs from "fs";
import type { BuildStaticDataOutput } from "@ulld/types";
import type { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
import { ComponentDocsQuery } from "../../classes/query/componentDocs.js";

export const componentDocsPathFromPluginComponent = (
    pluginName: string,
    componentName: string,
    full = false,
    projectRoot?: string,
): string => {
    return path.join(
        projectRoot || process.cwd(),
        "generatedMarkdown",
        "componentDocs",
        full ? "full" : "short",
        encodeURI(pluginName),
        `${encodeURI(componentName)}.mdx`,
    );
};


export const componentDocQueryObjectToUrl = (query: ComponentDocsQueryParams): string => {
    const url = new URLSearchParams()
    if(query.tag){
        (Array.isArray(query.tag) ? query.tag : [query.tag]).forEach((t) => {
            url.append("tag", t)
        })
    }
    if(query.full){
        url.set("full", "true")
    }
    if(query.query){
        url.set("query", query.query)
    }
    if(query.syntax){
        url.set("syntax", query.syntax)
    }
    if(query.pluginId){
        url.set("pluginId", query.pluginId)
    }
    return `/componentDocs?${url.toString()}`
}

export const docItemToComponentDocsFilePath = (
    item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number],
    full = false,
): string => {
    return componentDocsPathFromPluginComponent(
        item.pluginName,
        item.componentName,
        full,
    );
};

export const getComponentDocsContentFromItem = async (
    item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number],
    full = false,
): Promise<string | undefined> => {
    const filePath = docItemToComponentDocsFilePath(item, full);
    if (!filePath || !fs.existsSync(filePath)) {
        return;
    }
    return fs.promises.readFile(filePath, { encoding: "utf-8" });
};

export const getItemsByQuery = (
    buildData: BuildStaticDataOutput,
    query: ComponentDocsQueryParams,
): ReturnType<InstanceType<typeof ComponentDocsQuery>["queryAll"]> => {
    const docQuery = new ComponentDocsQuery();
    return docQuery.queryAll(buildData.componentDocs, query);
};

export const getPluginDocContentByIds = async (
    buildData: BuildStaticDataOutput,
    pluginName: string,
    componentName: string,
    full = false,
    permitOppositeOfFullIfNotFound = true
): Promise<{
    item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number]
    content: string | undefined
} | undefined> => {
    const item = buildData.componentDocs.find((x) =>
        Boolean(x.pluginName === pluginName && x.componentName === componentName),
    );
    if(item) {
        let content = await getComponentDocsContentFromItem(item, full)
        if(!content && permitOppositeOfFullIfNotFound){
            content = await getComponentDocsContentFromItem(item, !full)
        }
        return {
            item,
            content
        }
    }
};
