'use strict';

var path = require('path');
var fs = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var path__default = /*#__PURE__*/_interopDefault(path);
var fs__default = /*#__PURE__*/_interopDefault(fs);

// src/utils/baseAppUtils/componentDocPathUtils.ts

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

// src/utils/baseAppUtils/componentDocPathUtils.ts
var componentDocsPathFromPluginComponent = (pluginName, componentName, full = false, projectRoot) => {
  return path__default.default.join(
    projectRoot || process.cwd(),
    "generatedMarkdown",
    "componentDocs",
    full ? "full" : "short",
    encodeURI(pluginName),
    `${encodeURI(componentName)}.mdx`
  );
};
var componentDocQueryObjectToUrl = (query) => {
  let url = new URLSearchParams();
  if (query.tag) {
    (Array.isArray(query.tag) ? query.tag : [query.tag]).forEach((t) => url.append("tag", t));
  }
  if (query.full) {
    url.set("full", "true");
  }
  if (query.query) {
    url.set("query", query.query);
  }
  if (query.syntax) {
    url.set("syntax", query.syntax);
  }
  if (query.pluginId) {
    url.set("pluginId", query.pluginId);
  }
  return `/componentDocs?${url.toString()}`;
};
var docItemToComponentDocsFilePath = (item, full = false) => {
  return componentDocsPathFromPluginComponent(
    item.pluginName,
    item.componentName,
    full
  );
};
var getComponentDocsContentFromItem = async (item, full = false) => {
  let path2 = docItemToComponentDocsFilePath(item, full);
  if (!path2 || !fs__default.default.existsSync(path2)) {
    return;
  }
  return await fs__default.default.promises.readFile(path2, { encoding: "utf-8" });
};
var getItemsByQuery = (buildData, query) => {
  let docQuery = new ComponentDocsQuery();
  return docQuery.queryAll(buildData.componentDocs, query);
};
var getPluginDocContentByIds = async (buildData, pluginName, componentName, full = false, permitOppositeOfFullIfNotFound = true) => {
  let item = buildData.componentDocs.find(
    (x) => Boolean(x.pluginName === pluginName && x.componentName === componentName)
  );
  if (item) {
    let content = await getComponentDocsContentFromItem(item, full);
    if (!content && permitOppositeOfFullIfNotFound) {
      content = await getComponentDocsContentFromItem(item, !full);
    }
    return {
      item,
      content
    };
  }
};

exports.componentDocQueryObjectToUrl = componentDocQueryObjectToUrl;
exports.componentDocsPathFromPluginComponent = componentDocsPathFromPluginComponent;
exports.docItemToComponentDocsFilePath = docItemToComponentDocsFilePath;
exports.getComponentDocsContentFromItem = getComponentDocsContentFromItem;
exports.getItemsByQuery = getItemsByQuery;
exports.getPluginDocContentByIds = getPluginDocContentByIds;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.cjs.map