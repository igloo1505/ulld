import {
  textConfigSchema,
  textConfigSchemaOutput
} from "./chunk-F4OWPLKE.mjs";
import {
  tableUIConfigSchema,
  tableUIConfigSchemaOutput
} from "./chunk-E4QAKK37.mjs";
import {
  mediaConfigSchema,
  mediaConfigSchemaOutput
} from "./chunk-PRBLBTKN.mjs";
import {
  colorConfigSchemaOutput,
  colorsConfigSchema
} from "./chunk-VUVBLIYO.mjs";

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
var mainUIConfigSchemaOutput = z.object({
  table: tableUIConfigSchemaOutput,
  text: textConfigSchemaOutput,
  media: mediaConfigSchemaOutput,
  colors: colorConfigSchemaOutput,
  theme: themeSchema,
  autoApplyMdxTitles: z.boolean()
});

export {
  mainUIConfigSchema,
  mainUIConfigSchemaOutput
};
//# sourceMappingURL=chunk-RFADYZ37.mjs.map