import { z } from "zod";
import {
    tableUIConfigSchema,
    tableUIConfigSchemaOutput,
} from "./tableConfig.js";
import { textConfigSchema, textConfigSchemaOutput } from "./textConfig.js";
import { mediaConfigSchema, mediaConfigSchemaOutput } from "./mediaConfig.js";
import { colorConfigSchemaOutput, colorsConfigSchema } from "./colorsConfig.js";
import { themeSchema } from "@ulld/tailwind/themeUtils";
import { ZodOutputSchema } from "../../types.js";

export const mainUIConfigSchema = z
    .object({
        table: tableUIConfigSchema,
        text: textConfigSchema,
        media: mediaConfigSchema,
        colors: colorsConfigSchema,
        theme: themeSchema.default("ulld"),
        autoApplyMdxTitles: z.boolean().default(true),
    })
    .default({});

export const mainUIConfigSchemaOutput: ZodOutputSchema<
    typeof mainUIConfigSchema
> = z.object({
    table: tableUIConfigSchemaOutput,
    text: textConfigSchemaOutput,
    media: mediaConfigSchemaOutput,
    colors: colorConfigSchemaOutput,
    theme: themeSchema,
    autoApplyMdxTitles: z.boolean(),
});
