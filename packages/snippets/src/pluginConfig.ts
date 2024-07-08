import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";


const pluginConfig: DeveloperConfigInput<"snippets"> = {
    pluginName: "@ulld/snippets",
    slot: "snippets",
    pages: [
        {
            export: "./addSnippetPage",
            exportsPageProps: true,
            slot: "AddSnippetPage"
        },
    ],
    components: [
        {
            componentName: "SnippetList",
            slot: "SnippetList",
            export: "./snippetList"
        },
        {
            componentName: "SnippetFilter",
            slot: "SnippetFilter",
            export: "./snippetFilter"
        }
    ],
};


const parsedPlugin = developerConfigSchema.parse(pluginConfig);


writePluginConfig(parsedPlugin, __dirname, "both");
