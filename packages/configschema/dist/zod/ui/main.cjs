'use strict';

var zod = require('zod');
require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');
var convertColorString = require('@ulld/utilities/convertColorString');
var themeUtils = require('@ulld/tailwind/themeUtils');

// src/zod/ui/main.ts
var tableUIConfigSchema = zod.z.object({
  maxHeight: zod.z.union([zod.z.string(), zod.z.number()]).default(300).describe("The default height at which to limit tables. This can be overridden for each not individually in that note's front matter. If the value is a string, it must be able to be interpretted by css-in-tsx syntax. Numbers will automatically be interpreted as pixels.").transform((a) => typeof a === "number" ? `${a}px` : a)
}).default({});
var fontWeightSchema = zod.z.union([
  zod.z.literal("100"),
  zod.z.literal("200"),
  zod.z.literal("300"),
  zod.z.literal("400"),
  zod.z.literal("500"),
  zod.z.literal("600"),
  zod.z.literal("700"),
  zod.z.literal("800"),
  zod.z.literal("900")
]);
var fontStyleSchema = zod.z.union([
  zod.z.literal("italic"),
  zod.z.literal("bold"),
  zod.z.literal("normal")
]);
var fontConfigSchema = zod.z.object({
  path: zod.z.string().describe("Should be an absolute path. As this is only required at build time, it is not necessary for this path to be a child of the fsRoot directory."),
  weight: fontWeightSchema,
  style: fontStyleSchema
});
var textConfigSchema = zod.z.object({
  blockQuoteItalic: zod.z.boolean().default(false).describe("Whether or not to italicize block quote text."),
  fontPaths: zod.z.union([
    fontConfigSchema.array(),
    zod.z.literal("default")
    // change this to accept multiple fonts as a string and automate the layout file write accordingly.
  ]).default("default").describe("An array of font config objects to be bundled during the build.")
}).default({});
zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodPathStringField = (desc, optional) => desc ? optional ? zod.z.string().optional().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : optional ? zod.z.string().optional().transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().transform((a) => a && fsUtils.withForwardSlash(a));

// src/zod/ui/mediaConfig.ts
var mediaConfigSchema = zod.z.object({
  imageMap: zod.z.record(zod.z.string().describe("An alias to more easily embed this image throughout your notes."), zodPathStringField("The fsRoot relative path at which this image can be found.")).default({}),
  includeDefaultImageMap: zod.z.boolean().default(true).describe("Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."),
  imageRemoteTest: zod.z.instanceof(RegExp).array().default([])
}).default({});

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
var mainUIConfigSchema = zod.z.object({
  table: tableUIConfigSchema,
  text: textConfigSchema,
  media: mediaConfigSchema,
  colors: colorsConfigSchema,
  theme: themeUtils.themeSchema.default("ulld"),
  autoApplyMdxTitles: zod.z.boolean().default(true)
}).default({});

exports.mainUIConfigSchema = mainUIConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map