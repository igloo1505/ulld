import {
  DeveloperConfigInput,
  developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"UI"> = {
  pluginName: "@ulld/ui",
  slot: "UI",
  pages: [
    
  ],
  components: [
        {
            componentName: "PaginationGroup",
            slot: "Pagination",
            export: "./paginationGroup"
        },
        {
            componentName: "ConfirmationModal",
            slot: "confirmationModal",
            export: "./confirmationModal"
        }
  ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
