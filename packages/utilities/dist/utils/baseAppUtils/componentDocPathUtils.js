import { ComponentDocsQuery } from '../../chunk-NBNALFJ3.js';
import '../../chunk-F3FYYIAV.js';
import path from 'path';
import fs from 'fs';

var componentDocsPathFromPluginComponent = (pluginName, componentName, full = false, projectRoot) => {
  return path.join(
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
  if (!path2 || !fs.existsSync(path2)) {
    return;
  }
  return await fs.promises.readFile(path2, { encoding: "utf-8" });
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

export { componentDocQueryObjectToUrl, componentDocsPathFromPluginComponent, docItemToComponentDocsFilePath, getComponentDocsContentFromItem, getItemsByQuery, getPluginDocContentByIds };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.js.map