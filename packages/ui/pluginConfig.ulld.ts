import {
    DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"UI"> = {
    pluginName: "@ulld/ui",
    slot: "UI",
    pages: [
        {
            slot: "BookmarksPage",
            export: "./bookmarksPage",
        },
        {
            slot: "SearchResultsPage",
            export: "./searchResultsPage",
        },
    ],
    components: [
        {
            componentName: "PaginationGroup",
            slot: "Pagination",
            export: "./paginationGroup",
        },
        {
            componentName: "ConfirmationModal",
            slot: "confirmationModal",
            export: "./confirmationModal",
        },
        {
            componentName: "DictionaryPageItem",
            slot: "DictionaryPageItem",
            export: "./dictionaryItemEntry",
        },
        {
            componentName: "DictionaryLetterList",
            slot: "DictionaryLetterList",
            export: "./dictionaryLetterList",
        },
        {
            componentName: "Logo",
            slot: "logo",
            export: "./defaultLogo",
        },
    ],
    navigationLinks: [
        {
            label: "Dictionary",
            href: "/dictionary",
        },
        {
            label: "Auto-Property Settings",
            href: "/settings/autoSettings",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
