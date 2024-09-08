// src/classes/query/componentDocs.ts
var ComponentDocsQuery = class {
  constructor() {
  }
  itemMatchesSyntax(item, query) {
    if (query.syntax) {
      if (!item.embeddableSyntax.some(
        (a) => new RegExp(query.syntax, "gmi").test(a)
      )) {
        return false;
      }
    }
    return true;
  }
  itemMatchesTag(item, query) {
    let tags = query.tag ? Array.isArray(query.tag) ? query.tag : [query.tag] : false;
    if (!tags) {
      return true;
    } else if (!item.tags.length) {
      return false;
    }
    let tl = tags.map((t) => t.toLowerCase());
    return item.tags.some((a) => tl.includes(a.toLowerCase()));
  }
  itemMatchesPluginId(item, query) {
    return query.pluginId ? item.pluginName === query.pluginId : true;
  }
  itemMatchesQuery(item, query) {
    if (!query.query) {
      return true;
    }
    let re = new RegExp(query.query);
    if (re.test(item.pluginName)) {
      return true;
    }
    if (item.embeddableSyntax.length && item.embeddableSyntax.some((x) => re.test(x))) {
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
  queryItem(item, query) {
    return [
      this.itemMatchesPluginId,
      this.itemMatchesTag,
      this.itemMatchesQuery,
      this.itemMatchesSyntax
    ].some((f) => f(item, query));
  }
  queryAll(items, query) {
    return items.filter((x) => this.queryItem(x, query));
  }
};

export { ComponentDocsQuery };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-NBNALFJ3.js.map