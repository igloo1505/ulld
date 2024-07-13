import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"notebook"> = {
    pluginName: "@ulld/notebook",
    slot: "notebooks",
    pages: [],
    components: [],
    navigationLinks: [
        {
            label: "Notebooks",
            url: "/notebooks",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
