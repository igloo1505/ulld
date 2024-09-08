"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMZET64JIcjs = require('./chunk-MZET64JI.cjs');

// src/zod/ui/colorsConfig.ts
var _zod = require('zod');
var _convertColorString = require('@ulld/utilities/convertColorString');
var colorTransformOptional = (val) => val ? _convertColorString.convertColorString.call(void 0, val) : void 0;
var colorGroup = _zod.z.object({
  dark: _zod.z.string().optional().transform(colorTransformOptional),
  light: _zod.z.string().optional().transform(colorTransformOptional)
});
var colorValue = _zod.z.union([
  colorGroup,
  _zod.z.string().transform((c) => _convertColorString.convertColorString.call(void 0, c, "hsl"))
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
var configColors = _zod.z.union([
  _zod.z.literal("red"),
  _zod.z.literal("orange"),
  _zod.z.literal("amber"),
  _zod.z.literal("yellow"),
  _zod.z.literal("lime"),
  _zod.z.literal("green"),
  _zod.z.literal("emerald"),
  _zod.z.literal("teal"),
  _zod.z.literal("cyan"),
  _zod.z.literal("sky"),
  _zod.z.literal("blue"),
  _zod.z.literal("indigo"),
  _zod.z.literal("purple"),
  _zod.z.literal("fuchsia"),
  _zod.z.literal("pink"),
  _zod.z.literal("rose"),
  _zod.z.literal("slate"),
  _zod.z.literal("gray"),
  _zod.z.literal("stone"),
  _zod.z.literal("zinc"),
  _zod.z.literal("info"),
  _zod.z.literal("error"),
  _zod.z.literal("warning"),
  _zod.z.literal("alert"),
  _zod.z.literal("success"),
  _zod.z.literal("primary"),
  _zod.z.literal("secondary"),
  _zod.z.literal("success")
]);
var colorsConfigSchema = _zod.z.record(_zod.z.string(), colorValue).default(_chunkMZET64JIcjs.defaultUlldColorMap);




exports.colorGroup = colorGroup; exports.colorsConfigSchema = colorsConfigSchema;
//# sourceMappingURL=chunk-O5HV2BYW.cjs.map