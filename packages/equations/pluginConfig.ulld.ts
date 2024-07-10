import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";


const pluginConfig: DeveloperConfigInput<"equations"> = {
    pluginName: "@ulld/equations",
    slot: "equations",
    pages: [
        {
            export: "./equationModal",
            targetUrl: "@modal/(.)equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
            slot: "EquationDetailsModalPage"
        },
        {
            export: "./addEquationPage",
            targetUrl: "equations/add/page.tsx",
            exportsPageProps: true,
            slot: "AddEquationPage"
        },
        {
            export: "./equationDetailsPage",
            targetUrl: "equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
            slot: "EquationDetailsPage"
        },
        {
            export: "./equationsPage",
            targetUrl: "equations/page.tsx",
            exportsPageProps: true,
            slot: "EquationsPage"
        },
    ],
    // RESUME: Come back here and handle the embeddable components provided in the equations package. If I can get this to build tomorrow, the rest should be just a repeat and we're on our way to a fucking beta!
    components: [],
    navigationLinks: [
    {
        label: "Equations",
        href: "/equations"
    },
    {
        label: "Add Equation",
        href: "/equations/add"
    },
    ]
};


const parsedPlugin = developerConfigSchema.parse(pluginConfig);


writePluginConfig(parsedPlugin, __dirname, "both");
