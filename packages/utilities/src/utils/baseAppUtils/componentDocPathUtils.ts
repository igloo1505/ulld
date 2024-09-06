import path from "path";
import { BuildStaticDataOutput } from "@ulld/types";
import fs from "fs";
import { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
import { ComponentDocsQuery } from "../../classes/query/componentDocs.js";

export const componentDocsPathFromPluginComponent = (
    pluginName: string,
    componentName: string,
    full: boolean = false,
    projectRoot?: string,
) => {
    return path.join(
        projectRoot || process.cwd(),
        "generatedMarkdown",
        "componentDocs",
        full ? "full" : "short",
        encodeURI(pluginName),
        `${encodeURI(componentName)}.mdx`,
    );
};


export const componentDocQueryObjectToUrl = (query: ComponentDocsQueryParams) => {
    let url = new URLSearchParams()
    if(query.tag){
        (Array.isArray(query.tag) ? query.tag : [query.tag]).forEach((t) => url.append("tag", t))
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
    item: BuildStaticDataOutput["componentDocs"][number],
    full: boolean = false,
) => {
    return componentDocsPathFromPluginComponent(
        item.pluginName,
        item.componentName,
        full,
    );
};

export const getComponentDocsContentFromItem = async (
    item: BuildStaticDataOutput["componentDocs"][number],
    full: boolean = false,
) => {
    let path = docItemToComponentDocsFilePath(item, full);
    if (!path || !fs.existsSync(path)) {
        return;
    }
    return await fs.promises.readFile(path, { encoding: "utf-8" });
};

export const getItemsByQuery = (
    buildData: BuildStaticDataOutput,
    query: ComponentDocsQueryParams,
) => {
    let docQuery = new ComponentDocsQuery();
    return docQuery.queryAll(buildData.componentDocs, query);
};

export const getPluginDocContentByIds = async (
    buildData: BuildStaticDataOutput,
    pluginName: string,
    componentName: string,
    full: boolean = false,
    permitOppositeOfFullIfNotFound: boolean = true
) => {
    let item = buildData.componentDocs.find((x) =>
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
