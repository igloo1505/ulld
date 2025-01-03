"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/plot/main.ts
var _zod = require('zod');
var colorList = _zod.z.string().array().describe("An array of colors to cycle through for multiple plot paths.");
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
var _plotConfigSchemaInner = _zod.z.object({
  plotColorList: _zod.z.union([
    colorList,
    _zod.z.object({
      dark: colorList,
      light: colorList
    })
  ]).default(defaultColorList),
  plotColorCycleMethod: _zod.z.union([_zod.z.literal("inOrder"), _zod.z.literal("random")]).default("inOrder")
});
var plotConfigSchema = _plotConfigSchemaInner.default({});
var plotConfigSchemaOutput = _zod.z.object({
  plotColorCycleMethod: _zod.z.union([_zod.z.literal("inOrder"), _zod.z.literal("random")]),
  plotColorList: _zod.z.union([
    colorList,
    _zod.z.object({
      dark: colorList,
      light: colorList
    })
  ])
});




exports.plotConfigSchema = plotConfigSchema; exports.plotConfigSchemaOutput = plotConfigSchemaOutput;
//# sourceMappingURL=chunk-QS5SULUD.cjs.map