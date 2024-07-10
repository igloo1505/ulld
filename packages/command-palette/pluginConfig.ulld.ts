import {
  DeveloperConfigInput,
  developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"commandPalette"> = {
  pluginName: "@ulld/command-palette",
  slot: "commandPalette",
  pages: [],
  components: [
        {
            componentName: "CommandPalette",
            export: "./commandPalette",
            slot: "commandPalette"
        }
  ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
