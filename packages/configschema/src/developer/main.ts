import { z } from "zod";
import { componentConfigSchema } from "./componentSchema";
import { parserExtensionSchema } from "./parserSchema";
import { pluginSettingsSchema } from "./pluginSettingsSchema";
import { pluginAdditionalPageSchema } from "./pluginPageSchema";
import { pluginEventsSchema } from "./pluginEventsSchema";
import {
    InternalDeveloperConfigInput as DCI,
    InternalDeveloperConfigInputWithoutGeneric,
} from "./types/developerConfig";
import { slotKeySchema } from "./slotKeySchema";
import { trpcConfigSchema } from "./trpcConfigSchema";
import { additionalImportsConfigSchema } from "./additionalImportsConfigSchema";
import { PluginSlotKey } from "./slotMapType";
import { navigationLinkSchema } from "./navigationLink";
import { pluginCommandPaletteSchema } from "./commandPalette";
import { tailwindPluginConfig } from "./tailwind";

// WARN: Removed this type checking for now as the output value was returning the input type with too many optionals.
// export const developerConfigSchema: z.ZodType<DeveloperConfigInput> = z
export const developerConfigSchema = z
    .object({
        pluginName: z.string(),
        label: z.string().describe("For display purposes. Does not need to match npm the way pluginName does."),
        slot: slotKeySchema.optional(),
        components: componentConfigSchema.array().default([]),
        parsers: parserExtensionSchema.array().default([]),
        additionalImports: additionalImportsConfigSchema.optional(),
        trpc: trpcConfigSchema.optional(),
        settings: pluginSettingsSchema.optional(),
        pages: pluginAdditionalPageSchema.array().default([]),
        events: pluginEventsSchema.default({}),
        navigationLinks: navigationLinkSchema.array().default([]),
        commandPalette: pluginCommandPaletteSchema.default([]),
        tailwind: tailwindPluginConfig.default({}),
    })
    .transform((data) => {
        if (data.settings && !data.settings.title) {
            data.settings.title = data.pluginName;
        }
        return data;
    });

export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
export type DeveloperConfigInput<
    T extends PluginSlotKey | undefined = undefined,
> = DCI<T>;
export type DeveloperConfigInputWithoutGeneric =
    InternalDeveloperConfigInputWithoutGeneric;
