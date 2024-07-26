import slots from "@ulld/utilities/slotMap.json";
import { ComponentConfig } from "./componentConfig";
import { ParserConfig } from "./parserConfig";
import { AdditionalImportsConfig } from "./additionalImportsConfig";
import { TrpcConfig } from "./trpcConfig";
import { PluginSettingsConfig } from "./pluginSettingsConfig";
import { PluginPageConfig, PluginPageConfigWithoutGeneric } from "./pageConfig";
import { PluginEventsConfig } from "./pluginEventsConfig";
import { PluginSlotKey } from "../slotMapType";
import { NavigationLinkType } from "../navigationLinkType";
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