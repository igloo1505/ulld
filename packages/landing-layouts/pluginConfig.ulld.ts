import {
    developerConfigSchema,
    DeveloperConfigInput,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";


const ulldPluginConfig: DeveloperConfigInput<"dashboard"> = {
    pluginName: "@ulld/landing-layouts",
    slot: "dashboard",
    components: [
        {
            componentName: "LandingPageBetaRelease",
            slot: "LandingPage",
            export: "./beta"
        },
    ],
};


const parsedPlugin = developerConfigSchema.parse(ulldPluginConfig);


writePluginConfig(parsedPlugin, __dirname);
