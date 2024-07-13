import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"bibliography"> = {
    pluginName: "@ulld/bib-manager",
    slot: "bibliography",
    pages: [],
    components: [
        {
            componentName: "BibManagerPage",
            slot: "BibliographyPage",
            export: "./bibliographyPage"
        },
        {
            componentName: "BibEntryDetails",
            slot: "BibEntryDetails",
            export: "./bibEntryDetails"
        }
    ],
    navigationLinks: [
        {
            label: "Bibliography",
            href: "/bibliography",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
