import {
  defaultUlldColorMap
} from "./chunk-RI3KER5U.mjs";

// src/zod/ui/colorsConfig.ts
import { z } from "zod";
import { convertColorString } from "@ulld/utilities/convertColorString";
var colorTransformOptional = (val) => val ? convertColorString(val) : void 0;
var colorGroup = z.object({
  dark: z.string().optional().transform(colorTransformOptional),
  light: z.string().optional().transform(colorTransformOptional)
});
var colorValue = z.union([
  colorGroup,
  z.string().transform((c) => convertColorString(c, "hsl"))
]).nullish().transform((a) => {
  if (!a)
    return void 0;
  if (typeof a === "string") {
    return {
      dark: a,
      light: a
    };
  }
  if (!("dark" in a)) {
    return {
      dark: a.light,
      light: a.light
    };
  }
  return a;
});
var colorValueOutput = z.object({
  dark: z.string(),
  light: z.string()
});
var configColors = z.union([
  z.literal("red"),
  z.literal("orange"),
  z.literal("amber"),
  z.literal("yellow"),
  z.literal("lime"),
  z.literal("green"),
  z.literal("emerald"),
  z.literal("teal"),
  z.literal("cyan"),
  z.literal("sky"),
  z.literal("blue"),
  z.literal("indigo"),
  z.literal("purple"),
  z.literal("fuchsia"),
  z.literal("pink"),
  z.literal("rose"),
  z.literal("slate"),
  z.literal("gray"),
  z.literal("stone"),
  z.literal("zinc"),
  z.literal("info"),
  z.literal("error"),
  z.literal("warning"),
  z.literal("alert"),
  z.literal("success"),
  z.literal("primary"),
  z.literal("secondary"),
  z.literal("success")
]);
var colorConfigSchemaInner = z.record(z.string(), colorValue);
var colorsConfigSchema = colorConfigSchemaInner.default(defaultUlldColorMap);
var colorConfigSchemaOutput = z.record(z.string(), colorValueOutput);

export {
  colorGroup,
  colorValueOutput,
  colorsConfigSchema,
  colorConfigSchemaOutput
};
//# sourceMappingURL=chunk-VUVBLIYO.mjs.map