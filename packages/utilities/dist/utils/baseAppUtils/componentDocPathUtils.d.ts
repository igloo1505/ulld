import type { BuildStaticDataOutput } from "@ulld/types";
import type { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
import { ComponentDocsQuery } from "../../classes/query/componentDocs.js";
export declare const componentDocsPathFromPluginComponent: (pluginName: string, componentName: string, full?: boolean, projectRoot?: string) => string;
export declare const componentDocQueryObjectToUrl: (query: ComponentDocsQueryParams) => string;
export declare const docItemToComponentDocsFilePath: (item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number], full?: boolean) => string;
export declare const getComponentDocsContentFromItem: (item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number], full?: boolean) => Promise<string | undefined>;
export declare const getItemsByQuery: (buildData: BuildStaticDataOutput, query: ComponentDocsQueryParams) => ReturnType<InstanceType<typeof ComponentDocsQuery>["queryAll"]>;
export declare const getPluginDocContentByIds: (buildData: BuildStaticDataOutput, pluginName: string, componentName: string, full?: boolean, permitOppositeOfFullIfNotFound?: boolean) => Promise<{
    item: NonNullable<BuildStaticDataOutput["componentDocs"]>[number];
    content: string | undefined;
} | undefined>;
//# sourceMappingURL=componentDocPathUtils.d.ts.map