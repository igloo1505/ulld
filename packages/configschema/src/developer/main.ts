import { z } from "zod";
import { componentConfigSchema } from "./componentSchema";
import { parserExtensionSchema } from "./parserSchema";
import { transformExportStringArray } from "./transforms";
import { pluginSettingsSchema } from "./pluginSettingsSchema";
import { pluginAdditionalPageSchema } from "./pluginPageSchema";
import { pluginEventsSchema } from "./pluginEventsSchema";
import { pluginSlotSchema } from "./slotsSchema";
export type { DeveloperConfigInput } from "./typedocInput";


export const developerConfigSchema = z
    .object({
        pluginName: z.string(),
        slot: pluginSlotSchema.keyof().optional(),
        components: componentConfigSchema.array().default([]),
        parsers: parserExtensionSchema.array().default([]),
        additionalImports: z
            .object({
                root: z
                    .string()
                    .array()
                    .default([])
                    .describe(
                        "Additional imports to add to the RootLayout. These will not be added to the dom, but may be used to import files that don't need to be executed like css or scss files. Must match export in package.json",
                    )
                    .transform(transformExportStringArray),
                mdx: z
                    .string()
                    .array()
                    .default([])
                    .describe(
                        "Similar to additionalImports.root, but only applied to pages with rendered mdx content.",
                    )
                    .transform(transformExportStringArray),
            })
            .optional(),
        trpc: z
            .object({
                routerName: z.string(),
                routerExport: z
                    .string()
                    .describe(
                        "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property.",
                    ),
            })
            .optional(),
        settings: pluginSettingsSchema.optional(),
        pages: pluginAdditionalPageSchema.array().default([]),
        events: pluginEventsSchema,
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
