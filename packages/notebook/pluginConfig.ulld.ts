import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput = {
    pluginName: "@ulld/notebook",
    // slot: "n",
    label: "Notebook",
    pages: [
        // {
        //     slot: "FullPdf",
        //     export: "./fullPdf",
        //     exportsPageProps: true,
        // },
    ],
    components: [
        {
            componentName: "JupyterContextProvider",
            export: "./contextProvider",
            // exportedPropsName: "EmbeddablePdfProps",
        },
        {
            componentName: "JupyterCell",
            export: "./cell",
            // exportedPropsName: "EmbeddablePdfProps",
            embeddable: [
                {
                    label: "Cell",
                    regexToInclude: "<Cell"
                },
                {
                    label: "JupyterCell",
                    regexToInclude: "<JupyterCell"
                },
            ]
        },
        {
            componentName: "JupyterNotebook",
            export: "./notebook",
            // exportedPropsName: "EmbeddablePdfProps",
            embeddable: [
                {
                    label: "Notebook",
                    regexToInclude: "<Notebook"
                }
            ]
        },
    ],
    // navigationLinks: [],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
