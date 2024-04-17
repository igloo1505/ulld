import { z } from "zod";
import { tableUIConfigSchema } from "./tableConfig";
import { textConfigSchema } from "./textConfig";
import { mediaConfigSchema } from "./mediaConfig";
import { colorsConfigSchema } from "./colorsConfig";

export const themeSchema = z.union([
    z.literal("blue"),
    z.literal("gray"),
    z.literal("green"),
    z.literal("neutral"),
    z.literal("orange"),
    z.literal("red"),
    z.literal("rose"),
    z.literal("slate"),
    z.literal("stone"),
    z.literal("violet"),
    z.literal("yellow"),
    z.literal("zinc"),
]);

export const mainUIConfigSchema = z
    .object({
        table: tableUIConfigSchema,
        text: textConfigSchema,
        media: mediaConfigSchema,
        colors: colorsConfigSchema.optional(),
        theme: themeSchema.default("violet"),
    })
    .default({});
