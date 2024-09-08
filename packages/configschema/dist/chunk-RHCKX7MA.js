import {
  textConfigSchema
} from "./chunk-HKGNT4FZ.js";
import {
  tableUIConfigSchema
} from "./chunk-S27PH2PJ.js";
import {
  mediaConfigSchema
} from "./chunk-JVMBHBYG.js";
import {
  colorsConfigSchema
} from "./chunk-LM53CIXS.js";

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
//# sourceMappingURL=chunk-RHCKX7MA.js.map