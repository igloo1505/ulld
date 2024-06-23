import {
    developerConfigSchema,
    DeveloperConfigInput,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";


const ulldPluginConfig: DeveloperConfigInput = {
    pluginName: "@ulld/landing-layouts",
    slot: "UI",
    components: [
        {
            componentName: "LandingPageBetaRelease",
            slot: "landingPage",
            export: "./beta"
        },
    ],
};


const parsedPlugin = developerConfigSchema.parse(ulldPluginConfig);


writePluginConfig(parsedPlugin, __dirname);
