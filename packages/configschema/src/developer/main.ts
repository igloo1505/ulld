import { z } from "zod";
import { componentConfigSchema } from "./componentSchema";
import { parserExtensionSchema } from "./parserSchema";
import { pluginSettingsSchema } from "./pluginSettingsSchema";
import { pluginAdditionalPageSchema } from "./pluginPageSchema";
import { pluginEventsSchema } from "./pluginEventsSchema";
import { DeveloperConfigInput } from "./types/developerConfig";
import { slotKeySchema } from "./slotKeySchema";
import { trpcConfigSchema } from "./trpcConfigSchema";
import { additionalImportsConfigSchema } from "./additionalImportsConfigSchema";


// WARN: Removed this type checking for now as the output value was returning the input type with too many optionals.
// export const developerConfigSchema: z.ZodType<DeveloperConfigInput> = z
export const developerConfigSchema = z
    .object({
        pluginName: z.string(),
        slot: slotKeySchema.optional(),
        components: componentConfigSchema.array().default([]),
        parsers: parserExtensionSchema.array().default([]),
        additionalImports: additionalImportsConfigSchema.optional(),
        trpc: trpcConfigSchema.optional(),
        settings: pluginSettingsSchema.optional(),
        pages: pluginAdditionalPageSchema.array().default([]),
        events: pluginEventsSchema.default({}),
        // Config seems right, but commented out because it's not yet enabled in the build script and I need to take care of enough of the build script to launch this app.
        // commandPalette: pluginCommandPaletteSchema
    })
    .transform((data) => {
        if (data.settings && !data.settings.tabLabel) {
            data.settings.tabLabel = data.pluginName;
        }
        return data;
    });


export type DeveloperConfigOutput = z.output<typeof developerConfigSchema>;
