import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/baseApp/fileContent/componentMap.ts
init_esm_shims();
var getImportsForPlugin = (plugin) => {
  if (!plugin.embeddables)
    return { content: "", pluginNames: [] };
  let s = "";
  let pluginNames = [];
  for (const k of plugin.embeddables) {
    s += `import ${k.generatedComponentName} from "${plugin.name}/${k.export}"`;
    pluginNames.push(k.generatedComponentName);
  }
  return {
    content: s,
    pluginNames
  };
};
var getImports = (plugins) => {
  let data = plugins.filter((p) => p.embeddables && p.embeddables.length).map((p) => getImportsForPlugin(p));
  let pluginNames = data.map((d) => d.pluginNames).flat();
  return {
    content: data.map((d) => d.content).join(";\n"),
    pluginNames
  };
};
var getComponentData = (plugins) => {
  let embeddables = [];
  for (const k of plugins) {
    if (k.embeddables) {
      embeddables = embeddables.concat(k.embeddables);
    }
  }
  let items = [];
  for (const k of embeddables) {
    items.push(`    {
        regex: new RegExp("${k?.regexToInclude}"),
        component: ${k?.generatedComponentName},
        label: "${k?.label}"
    }`);
  }
  return items.join(",\n");
};
var getComponentMapContent = (plugins) => {
  let s = `import { AdditionalComponents } from "@ulld/component-map/types";
${getImports(plugins).content}

export const generatedComponentMap: AdditionalComponents<any> = [
${getComponentData(plugins)}
]
`;
  return s;
};

export {
  getComponentMapContent
};
//# sourceMappingURL=chunk-NC6PDUKU.js.map