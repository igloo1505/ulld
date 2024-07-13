import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"boards"> = {
    pluginName: "@ulld/kanban",
    slot: "boards",
    pages: [],
    components: [],
    navigationLinks: [
    /* { */
    /*     label: "Boards", */
    /*     url: "/boards" */
    /* }, */
    /* { */
    /*     label: "Add Board", */
    /*     url: "/boards/create" */
    /* }, */
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
