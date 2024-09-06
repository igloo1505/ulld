import { z } from "zod";
import { tableUIConfigSchema } from "./tableConfig.js";
import { textConfigSchema } from "./textConfig.js";
import { mediaConfigSchema } from "./mediaConfig.js";
import { colorsConfigSchema } from "./colorsConfig.js";
import { themeSchema } from "@ulld/tailwind/themeUtils";

export const mainUIConfigSchema = z
    .object({
        table: tableUIConfigSchema,
        text: textConfigSchema,
        media: mediaConfigSchema,
        colors: colorsConfigSchema,
        theme: themeSchema.default("ulld"),
        autoApplyMdxTitles: z.boolean().default(true)
    })
    .default({});
