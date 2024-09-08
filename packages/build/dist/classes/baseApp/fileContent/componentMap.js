// TODO: Create a generated name in the embeddable class itself to use throughout the build process for consistency and stability. Don't generate one here.
const getImportsForPlugin = (plugin) => {
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
        pluginNames,
    };
};
const getImports = (plugins) => {
    let data = plugins
        .filter((p) => p.embeddables && p.embeddables.length)
        .map((p) => getImportsForPlugin(p));
    let pluginNames = data.map((d) => d.pluginNames).flat();
    return {
        content: data.map((d) => d.content).join(";\n"),
        pluginNames,
    };
};
const getComponentData = (plugins) => {
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
export const getComponentMapContent = (plugins) => {
    let s = `import { AdditionalComponents } from "@ulld/component-map/types";
${getImports(plugins).content}

export const generatedComponentMap: AdditionalComponents<any> = [
${getComponentData(plugins)}
]
`;
    return s;
};
