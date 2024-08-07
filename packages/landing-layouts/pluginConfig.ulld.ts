import {
    developerConfigSchema,
    DeveloperConfigInput,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";


const ulldPluginConfig: DeveloperConfigInput<"dashboard"> = {
    pluginName: "@ulld/landing-layouts",
    slot: "dashboard",
    label: "Dashboards",
    components: [
        {
            componentName: "ModularDashboard",
            slot: "LandingPage",
            export: "./modularDashboard"
        },
    ],
};


const parsedPlugin = developerConfigSchema.parse(ulldPluginConfig);


writePluginConfig(parsedPlugin, __dirname);
