import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput = {
    pluginName: "@ulld/equations",
    slot: "math",
    pages: [
        {
            export: "./equationModal",
            targetUrl: "(.)equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
        },
        {
            export: "./addEquationPage",
            targetUrl: "equations/add/page.tsx",
            exportsPageProps: true,
        },
        {
            export: "./equationDetailsPage",
            targetUrl: "equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
        },
        {
            export: "./equationsPage",
            targetUrl: "equations/page.tsx",
            exportsPageProps: true,
        },
    ],
    // RESUME: Come back here and handle the embeddable components provided in the equations package. If I can get this to build tomorrow, the rest should be just a repeat and we're on our way to a fucking beta!
    components: [],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);


writePluginConfig(parsedPlugin, __dirname);
