import slots from "@ulld/utilities/slotMap.json";
import { ComponentConfig } from "./componentConfig";
import { ParserConfig } from "./parserConfig";
import { AdditionalImportsConfig } from "./additionalImportsConfig";
import { TrpcConfig } from "./trpcConfig";
import { PluginSettingsConfig } from "./pluginSettingsConfig";
import { PluginPageConfig } from "./pageConfig";
import { PluginEventsConfig } from "./pluginEventsConfig";

export type DeveloperConfigInput = {
    pluginName: string;
    slot?: keyof typeof slots;
    components?: ComponentConfig[];
    parsers?: ParserConfig[];
    additionalImports?: AdditionalImportsConfig;
    trpc?: TrpcConfig;
    settings?: PluginSettingsConfig;
    pages?: PluginPageConfig[];
    events?: PluginEventsConfig;
};
