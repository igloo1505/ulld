import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"pdf"> = {
    pluginName: "@ulld/pdf",
    slot: "pdf",
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
