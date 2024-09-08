'use strict';

var zod = require('zod');
var convertColorString = require('@ulld/utilities/convertColorString');

// src/zod/ui/colorsConfig.ts

// src/zod/ui/defaultColorMap.ts
var defaultUlldColorMap = {
  success: "#16a34a",
  info: "#0284c7",
  error: "#dc2626",
  sky: "#07c8f9",
  yellow: "#ffff24",
  blue: "#00a1e4",
  orange: "#ff7d00",
  green: "#89fc00",
  red: "#ff0000",
  purple: "#9908ff",
  pink: "#dc0073",
  amber: {
    dark: "#f59e0b",
    light: "#d97706"
  },
  lime: {
    dark: "#84cc16",
    light: "#65a30d"
  },
  emerald: {
    dark: "#10b981",
    light: "#059669"
  },
  teal: {
    dark: "#14b8a6",
    light: "#0d9488"
  },
  cyan: {
    dark: "#06b6d4",
    light: "#0891b2"
  },
  indigo: {
    dark: "#6366f1",
    light: "#4f46e5"
  },
  fuchsia: {
    dark: "#d946ef",
    light: "#c026d3"
  },
  rose: {
    dark: "#f43f5e",
    light: "#e11d48"
  },
  slate: {
    dark: "#64748b",
    light: "#475569"
  },
  gray: {
    dark: "#6b7280",
    light: "#4b5563"
  },
  stone: {
    dark: "#78716c",
    light: "#57534e"
  },
  zinc: {
    dark: "#71717a",
    light: "#52525b"
  },
  warning: "#eab308",
  alert: "#3b82f6",
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))"
};
var colorTransformOptional = (val) => val ? convertColorString.convertColorString(val) : void 0;
var colorGroup = zod.z.object({
  dark: zod.z.string().optional().transform(colorTransformOptional),
  light: zod.z.string().optional().transform(colorTransformOptional)
});
var colorValue = zod.z.union([
  colorGroup,
  zod.z.string().transform((c) => convertColorString.convertColorString(c, "hsl"))
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
zod.z.union([
  zod.z.literal("red"),
  zod.z.literal("orange"),
  zod.z.literal("amber"),
  zod.z.literal("yellow"),
  zod.z.literal("lime"),
  zod.z.literal("green"),
  zod.z.literal("emerald"),
  zod.z.literal("teal"),
  zod.z.literal("cyan"),
  zod.z.literal("sky"),
  zod.z.literal("blue"),
  zod.z.literal("indigo"),
  zod.z.literal("purple"),
  zod.z.literal("fuchsia"),
  zod.z.literal("pink"),
  zod.z.literal("rose"),
  zod.z.literal("slate"),
  zod.z.literal("gray"),
  zod.z.literal("stone"),
  zod.z.literal("zinc"),
  zod.z.literal("info"),
  zod.z.literal("error"),
  zod.z.literal("warning"),
  zod.z.literal("alert"),
  zod.z.literal("success"),
  zod.z.literal("primary"),
  zod.z.literal("secondary"),
  zod.z.literal("success")
]);
var colorsConfigSchema = zod.z.record(zod.z.string(), colorValue).default(defaultUlldColorMap);

exports.colorGroup = colorGroup;
exports.colorsConfigSchema = colorsConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=colorsConfig.cjs.map