import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"navigation"> = {
    pluginName: "@ulld/navigation",
    slot: "navigation",
    label: "Navigation",
    pages: [],
    components: [
        {
            componentName: "Navbar",
            slot: "navbar",
            export: "./navbar",
        },
        {
            componentName: "SidebarNavigation",
            slot: "secondary",
            export: "./sidebar",
        },
        {
            componentName: "MultiPageSidebar",
            slot: "MultiPageSidebar",
            export: "./multiPageSidebar",
        },
        {
            componentName: "FullScreenNavigation",
            slot: "FullScreenNavigationMenu",
            export: "./fullScreenNav",
        },
        {
            componentName: "FooterComponent",
            slot: "Footer",
            export: "./footerSlotComponent",
        },
        {
            componentName: "MdxNoteToc",
            slot: "MdxNoteToc",
            export: "./mdxNoteToc"
        }
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
