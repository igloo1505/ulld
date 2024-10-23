// src/zod/plot/main.ts
import { z } from "zod";
var colorList = z.string().array().describe("An array of colors to cycle through for multiple plot paths.");
var defaultColorList = [
  "#e91e62",
  "#9c27b0",
  "#673ab6",
  "#3f50b5",
  "#f44336",
  "#4caf4f",
  "#00a8f4",
  "#ff5721",
  "#ffeb3a",
  "#00bcd4",
  "#cddc39"
];
var _plotConfigSchemaInner = z.object({
  plotColorList: z.union([
    colorList,
    z.object({
      dark: colorList,
      light: colorList
    })
  ]).default(defaultColorList),
  plotColorCycleMethod: z.union([z.literal("inOrder"), z.literal("random")]).default("inOrder")
});
var plotConfigSchema = _plotConfigSchemaInner.default({});
var plotConfigSchemaOutput = z.object({
  plotColorCycleMethod: z.union([z.literal("inOrder"), z.literal("random")]),
  plotColorList: z.union([
    colorList,
    z.object({
      dark: colorList,
      light: colorList
    })
  ])
});

export {
  plotConfigSchema,
  plotConfigSchemaOutput
};
//# sourceMappingURL=chunk-I3TUABK3.mjs.map