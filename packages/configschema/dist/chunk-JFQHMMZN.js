import {
  textConfigSchema
} from "./chunk-WYAPQU7P.js";
import {
  tableUIConfigSchema
} from "./chunk-W52JW5S6.js";
import {
  mediaConfigSchema
} from "./chunk-ESJ66YGI.js";
import {
  colorsConfigSchema
} from "./chunk-AY57AZMJ.js";

// src/zod/ui/main.ts
import { z } from "zod";
import { themeSchema } from "@ulld/tailwind/themeUtils";
var mainUIConfigSchema = z.object({
  table: tableUIConfigSchema,
  text: textConfigSchema,
  media: mediaConfigSchema,
  colors: colorsConfigSchema,
  theme: themeSchema.default("ulld"),
  autoApplyMdxTitles: z.boolean().default(true)
}).default({});

export {
  mainUIConfigSchema
};
//# sourceMappingURL=chunk-JFQHMMZN.js.map