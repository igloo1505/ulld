import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"pdf"> = {
    pluginName: "@ulld/pdf",
    slot: "pdf",
    label: "Pdf",
    pages: [
        {
            slot: "FullPdf",
            export: "./fullPdf",
            exportsPageProps: true,
        },
    ],
    components: [
        {
            componentName: "EmbeddablePdf",
            slot: "EmbeddablePdf",
            export: "./embeddablePdf",
            exportedPropsName: "EmbeddablePdfProps",
            embeddable: [
                {
                    regexToInclude: "<Pdf",
                    label: "Pdf",
                },
            ],
        },
    ],
    navigationLinks: [],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
