import {
  textConfigSchema
} from "./chunk-VLOFAKAQ.mjs";
import {
  tableUIConfigSchema
} from "./chunk-HIYUKVMC.mjs";
import {
  mediaConfigSchema
} from "./chunk-VEKQJ2EE.mjs";
import {
  colorsConfigSchema
} from "./chunk-HZWFB63O.mjs";

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
//# sourceMappingURL=chunk-F2R4XUXR.mjs.map