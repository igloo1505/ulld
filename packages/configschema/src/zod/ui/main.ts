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
        colors: colorsConfigSchema.optional(),
        theme: themeSchema.default("violet"),
    })
    .default({});
