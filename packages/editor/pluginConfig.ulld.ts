import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"editor"> = {
    pluginName: "@ulld/snippets",
    slot: "editor",
    label: "Editor",
    pages: [
        {
            slot: "EditorModalPage",
            export: "./editorModalPage",
        },

        {
            slot: "EditorPage",
            export: "./editorPage",
        },
        {
            slot: "LatexEditorPage",
            export: "./latexEditorPage",
        },
        {
            slot: "MdxEditorPage",
            export: "./mdxEditorPage",
        },
    ],
    components: [
        // {
        //     componentName: "IDE",
        //     export: "./ide",
        //     embeddable: [
        //         {
        //             label: "Editor",
        //             regexToInclude: "<Editor",
        //         },
        //         {
        //             label: "IDE",
        //             regexToInclude: "<Ide",
        //         },
        //     ],
        // },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
