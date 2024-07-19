import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"snippets"> = {
    pluginName: "@ulld/snippets",
    slot: "snippets",
    label: "Snippets",
    pages: [
        {
            export: "./addSnippetPage",
            exportsPageProps: true,
            slot: "AddSnippetPage",
        },
        {
            export: "./snippetsPage",
            exportsPageProps: false,
            slot: "SnippetListPage"
        }
    ],
    components: [
        {
            componentName: "SnippetList",
            slot: "SnippetList",
            export: "./snippetList",
        },
        {
            componentName: "SnippetFilter",
            slot: "SnippetFilter",
            export: "./snippetFilter",
        },
    ],
    navigationLinks: [
        {
            label: "Snippets",
            href: "/snippets",
        },
        {
            label: "Add Snippet",
            href: "/snippets/add",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
