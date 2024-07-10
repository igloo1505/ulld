import {
  DeveloperConfigInput,
  developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"task"> = {
  pluginName: "@ulld/ui",
  slot: "UI",
  pages: [
    
  ],
  components: [
        
  ],
    navigationLinks: [
    {
        label: "Create To Do list",
        href: "/todo/add/list",
    },
    {
        label: "To Do's",
        href: "/todo"
    },
    ]
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
