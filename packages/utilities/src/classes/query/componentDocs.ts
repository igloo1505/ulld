import { BuildStaticDataOutput } from "@ulld/types";
import { ComponentDocsQueryParams } from "../../types/baseApp/componentDocsQuery.js";
type QueryItem = BuildStaticDataOutput["componentDocs"][number];

export class ComponentDocsQuery {
    constructor() { }
    private itemMatchesSyntax(
        item: QueryItem,
        query: ComponentDocsQueryParams,
    ): boolean {
        if (query.syntax) {
            if (
                !item.embeddableSyntax.some((a) =>
                    new RegExp(query.syntax!, "gmi").test(a),
                )
            ) {
                return false;
            }
        }
        return true;
    }
    private itemMatchesTag(item: QueryItem, query: ComponentDocsQueryParams) {
        let tags = query.tag
            ? Array.isArray(query.tag)
                ? query.tag
                : [query.tag]
            : false;
        if (!tags) {
            return true;
        } else if (!item.tags.length) {
            return false;
        }
        let tl = tags.map((t) => t.toLowerCase());
        return item.tags.some((a) => tl.includes(a.toLowerCase()));
    }
    private itemMatchesPluginId(
        item: QueryItem,
        query: ComponentDocsQueryParams,
    ): boolean {
        return query.pluginId ? item.pluginName === query.pluginId : true
    }
    private itemMatchesQuery(
        item: QueryItem,
        query: ComponentDocsQueryParams,
    ): boolean {
        if (!query.query) {
            return true;
        }
        let re = new RegExp(query.query);
        if (re.test(item.pluginName)) {
            return true;
        }
        if (
            item.embeddableSyntax.length &&
            item.embeddableSyntax.some((x) => re.test(x))
        ) {
            return true;
        }
        if (re.test(item.componentName)) {
            return true;
        }
        if (item.tags.length && item.tags.some((x) => re.test(x))) {
            return true;
        }
        return false;
    }

    queryItem(item: QueryItem, query: ComponentDocsQueryParams) {
        return [
            this.itemMatchesPluginId,
            this.itemMatchesTag,
            this.itemMatchesQuery,
            this.itemMatchesSyntax,
        ].some((f) => f(item, query));
    }
    queryAll(items: QueryItem[], query: ComponentDocsQueryParams) {
        return items.filter((x) => this.queryItem(x, query))
    }
}
