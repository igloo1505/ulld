import { z } from "zod";
import { componentConfigSchema } from "./componentSchema.js";
import { pluginParserMap } from "./parserSchema.js";
import { pluginSettingsSchema } from "./pluginSettingsSchema.js";
import { pluginAdditionalPageSchema } from "./pluginPageSchema.js";
import { pluginEventsSchema } from "./pluginEventsSchema.js";
import {
    InternalDeveloperConfigInput as DCI,
    InternalDeveloperConfigInputWithoutGeneric,
} from "./types/developerConfig.js";
import { slotKeySchema } from "./slotKeySchema.js";
import { trpcConfigSchema } from "./trpcConfigSchema.js";
import { additionalImportsConfigSchema } from "./additionalImportsConfigSchema.js";
import { PluginSlotKey } from "./slotMapType.js";
import { navigationLinkSchema } from "./navigationLink.js";
import { pluginCommandPaletteSchema } from "./commandPalette.js";
import { tailwindPluginConfig } from "./tailwind.js";
export { parserKeyList } from "./parserSchema.js";
import { transformExportStringOptional } from "@ulld/utilities/transformExportString";

export const defaultPluginId =
    "THIS IS AUTOMATICALLY GENERATED. Do not apply this key yourself. It will be overwritten.";

// WARN: Removed this type checking for now as the output value was returning the input type with too many optionals.
// export const developerConfigSchema: z.ZodType<DeveloperConfigInput> = z


export const _developerConfigSchema = z.object({
    pluginName: z.string(),
    label: z
        .string()
        .describe(
            "For display purposes. Does not need to match npm the way pluginName does.",
        ),
    pluginId: z.string().default(defaultPluginId),
    slot: slotKeySchema.optional(),
    components: componentConfigSchema.array().default([]),
    parsers: pluginParserMap.default({}),
    additionalImports: additionalImportsConfigSchema.optional(),
    trpc: trpcConfigSchema.optional(),
    settings: pluginSettingsSchema.optional(),
    pages: pluginAdditionalPageSchema.array().default([]),
    events: pluginEventsSchema.default({}),
    navigationLinks: navigationLinkSchema.array().default([]),
    commandPalette: pluginCommandPaletteSchema.default([]),
    tailwind: tailwindPluginConfig.default({}),
    documentation: z.string().optional().describe("An optional export of an mdx file that describes the use of your plugin.").transform(transformExportStringOptional),
    styles: z.object({
        root: z.string().optional().describe("Optional export of a scss file that should be imported to all pages."),
        mdx: z.string().optional().describe("Optional export of a scss file that should be imported to pages with mdx content only."),
    }).default({})
});

export const developerConfigSchema = _developerConfigSchema.transform(
    (data) => {
        if (data.settings && !data.settings.title) {
            data.settings.title = data.pluginName;
        }
        return data;
    },
);

export const internalBuildDeveloperConfigSchema = _developerConfigSchema.extend(
    {
        pluginId: z.string().refine((s) => s !== defaultPluginId),
    },
);

export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<
    T extends PluginSlotKey | undefined = undefined,
> = DCI<T>;
export type DeveloperConfigInputWithoutGeneric =
    InternalDeveloperConfigInputWithoutGeneric;
export type ParserKey = keyof DeveloperConfigOutput["parsers"];
