import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput = {
    pluginName: "@ulld/plot",
    label: "Plot",
    pages: [],
    components: [
        {
            componentName: "LinePlot",
            export: "./single/line",
            embeddable: [
                {
                    regexToInclude: "<LinePlot",
                    label: "LinePlot"
                }
            ]
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
