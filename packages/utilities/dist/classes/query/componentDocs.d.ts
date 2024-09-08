import { BuildStaticDataOutput } from "@ulld/types";
import { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
type QueryItem = BuildStaticDataOutput["componentDocs"][number];
export declare class ComponentDocsQuery {
    constructor();
    private itemMatchesSyntax;
    private itemMatchesTag;
    private itemMatchesPluginId;
    private itemMatchesQuery;
    queryItem(item: QueryItem, query: ComponentDocsQueryParams): boolean;
    queryAll(items: QueryItem[], query: ComponentDocsQueryParams): {
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
}
export {};
//# sourceMappingURL=componentDocs.d.ts.map