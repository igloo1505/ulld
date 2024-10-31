import slots from "@ulld/utilities/slotMap.json";
import { ComponentConfig } from "./componentConfig.js";
import { ParserConfig } from "./parserConfig.js";
import { AdditionalImportsConfig } from "./additionalImportsConfig.js";
import { TrpcConfig } from "./trpcConfig.js";
import { PluginSettingsConfig } from "./pluginSettingsConfig.js";
import { PluginPageConfig, PluginPageConfigWithoutGeneric } from "./pageConfig.js";
import { PluginEventsConfig } from "./pluginEventsConfig.js";
import { PluginSlotKey } from "../slotMapType.js";
import { NavigationLinkType } from "../navigationLinkType.js";
export type InternalDeveloperConfigInput<T extends PluginSlotKey | undefined = undefined> = {
    pluginName: string;
    label?: string;
    slot?: keyof typeof slots;
    components?: ComponentConfig<T>[];
    parsers?: {
        mdx?: ParserConfig;
    };
    additionalImports?: AdditionalImportsConfig;
    trpc?: TrpcConfig;
    settings?: PluginSettingsConfig;
    pages?: PluginPageConfig<T>[];
    events?: PluginEventsConfig;
    navigationLinks?: NavigationLinkType[];
};
export type InternalDeveloperConfigInputWithoutGeneric = {
    pluginName: string;
    slot?: keyof typeof slots;
    components?: ComponentConfig[];
    parsers?: ParserConfig[];
    additionalImports?: AdditionalImportsConfig;
    trpc?: TrpcConfig;
    settings?: PluginSettingsConfig;
    pages?: PluginPageConfigWithoutGeneric[];
    events?: PluginEventsConfig;
    navigationLinks?: NavigationLinkType[];
};
//# sourceMappingURL=developerConfig.d.ts.map