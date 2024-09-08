import { BuildStaticDataOutput } from "@ulld/types";
import { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
export declare const componentDocsPathFromPluginComponent: (pluginName: string, componentName: string, full?: boolean, projectRoot?: string) => string;
export declare const componentDocQueryObjectToUrl: (query: ComponentDocsQueryParams) => string;
export declare const docItemToComponentDocsFilePath: (item: BuildStaticDataOutput["componentDocs"][number], full?: boolean) => string;
export declare const getComponentDocsContentFromItem: (item: BuildStaticDataOutput["componentDocs"][number], full?: boolean) => Promise<string | undefined>;
export declare const getItemsByQuery: (buildData: BuildStaticDataOutput, query: ComponentDocsQueryParams) => {
    tags: string[];
    pluginName: string;
    componentName: string;
    embeddableSyntax: string[];
    urls: {
        short?: string | undefined;
        full?: string | undefined;
    };
    filePaths: {
        short?: string | undefined;
        full?: string | undefined;
    };
    componentId: string;
}[];
export declare const getPluginDocContentByIds: (buildData: BuildStaticDataOutput, pluginName: string, componentName: string, full?: boolean, permitOppositeOfFullIfNotFound?: boolean) => Promise<{
    item: {
        tags: string[];
        pluginName: string;
        componentName: string;
        embeddableSyntax: string[];
        urls: {
            short?: string | undefined;
            full?: string | undefined;
        };
        filePaths: {
            short?: string | undefined;
            full?: string | undefined;
        };
        componentId: string;
    };
    content: string | undefined;
} | undefined>;
//# sourceMappingURL=componentDocPathUtils.d.ts.map