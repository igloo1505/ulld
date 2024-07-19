import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"form"> = {
    pluginName: "@ulld/full-form",
    label: "Form",
    slot: "form",
    components: [
        {
            componentName: "SettingPageWrapper",
            slot: "SettingsPageContainer",
            export: "./settingPageWrapper",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
