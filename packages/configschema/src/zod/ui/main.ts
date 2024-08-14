import { z } from "zod";
import { tableUIConfigSchema } from "./tableConfig";
import { textConfigSchema } from "./textConfig";
import { mediaConfigSchema } from "./mediaConfig";
import { colorsConfigSchema } from "./colorsConfig";
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
