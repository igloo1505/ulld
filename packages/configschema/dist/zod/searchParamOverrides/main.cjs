'use strict';

var zod = require('zod');

// src/zod/searchParamOverrides/main.ts
var nbConvertTemplateOptions = zod.z.union([
  zod.z.literal("lab"),
  zod.z.literal("classic"),
  zod.z.literal("reveal"),
  zod.z.string()
]);
zod.z.object({
  nbconvertPath: zod.z.string().optional().describe("The path to nbConvert. This option will likely be deprecated."),
  conversionTimeout: zod.z.number().default(300).describe("The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."),
  customConversionFunction: zod.z.object({
    pdf: zod.z.function().args(zod.z.string().describe("Path to the notebook"), zod.z.string().describe("Output directory")).returns(zod.z.string().describe("utf-8 encoded string"))
  }).partial().optional(),
  execute: zod.z.boolean().default(false).describe("Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."),
  nbConvertTemplate: nbConvertTemplateOptions.default("classic").describe("The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"),
  notebookOutputDir: zod.z.string().default("/generated").describe("The fsRoot relative file path where converted notebooks should be saved.")
});
var shikiThemeValidator = zod.z.union([
  zod.z.literal("andromeeda"),
  zod.z.literal("aurora-x"),
  zod.z.literal("ayu-dark"),
  zod.z.literal("catppuccin-frappe"),
  zod.z.literal("catppuccin-latte"),
  zod.z.literal("catppuccin-macchiato"),
  zod.z.literal("catppuccin-mocha"),
  zod.z.literal("dark-plus"),
  zod.z.literal("dracula"),
  zod.z.literal("dracula-soft"),
  zod.z.literal("github-dark"),
  zod.z.literal("github-dark-dimmed"),
  zod.z.literal("github-light"),
  zod.z.literal("light-plus"),
  zod.z.literal("material-theme"),
  zod.z.literal("material-theme-darker"),
  zod.z.literal("material-theme-lighter"),
  zod.z.literal("material-theme-ocean"),
  zod.z.literal("material-theme-palenight"),
  zod.z.literal("min-dark"),
  zod.z.literal("min-light"),
  zod.z.literal("monokai"),
  zod.z.literal("night-owl"),
  zod.z.literal("nord"),
  zod.z.literal("one-dark-pro"),
  zod.z.literal("poimandres"),
  zod.z.literal("red"),
  zod.z.literal("rose-pine"),
  zod.z.literal("rose-pine-dawn"),
  zod.z.literal("rose-pine-moon"),
  zod.z.literal("slack-dark"),
  zod.z.literal("slack-ochin"),
  zod.z.literal("solarized-dark"),
  zod.z.literal("solarized-light"),
  zod.z.literal("synthwave-84"),
  zod.z.literal("tokyo-night"),
  zod.z.literal("vesper"),
  zod.z.literal("vitesse-black"),
  zod.z.literal("vitesse-dark"),
  zod.z.literal("vitesse-light")
]);

// src/zod/searchParamOverrides/main.ts
var fields = {
  colab: zod.z.coerce.boolean(),
  kernel: zod.z.string(),
  nbgrader: zod.z.coerce.boolean(),
  nbReadOnly: zod.z.coerce.boolean(),
  nbConvertExec: zod.z.coerce.boolean(),
  nbConvertTemp: nbConvertTemplateOptions,
  shikiHlLight: shikiThemeValidator,
  shikiHlDark: shikiThemeValidator
};
var configSearchParamOverrideSchema = zod.z.object(fields).partial();
var applyConfigOverrideMap = {
  colab: (baseConfig, override) => {
    if (override.colab) {
      baseConfig.jupyter.jupyterReactProps.collaborative = true;
    }
    return baseConfig;
  },
  kernel: (baseConfig, override) => {
    if (override.kernel) {
      baseConfig.jupyter.kernel = override.kernel;
    }
    return baseConfig;
  },
  nbgrader: (baseConfig, override) => {
    if (override.nbgrader) {
      baseConfig.jupyter.jupyterNotebookProps.nbgrader = override.nbgrader;
    }
    return baseConfig;
  },
  nbReadOnly: (baseConfig, override) => {
    if (override.nbReadOnly) {
      baseConfig.jupyter.jupyterNotebookProps.readOnly = override.nbReadOnly;
    }
    return baseConfig;
  },
  nbConvertExec: (baseConfig, override) => {
    if (override.nbConvertExec) {
      baseConfig.jupyter.nbConvert.execute = override.nbConvertExec;
    }
    return baseConfig;
  },
  nbConvertTemp: (baseConfig, override) => {
    if (override.nbConvertTemp) {
      baseConfig.jupyter.nbConvert.nbConvertTemplate = override.nbConvertTemp;
    }
    return baseConfig;
  },
  shikiHlDark: (baseConfig, override) => {
    if (override.shikiHlDark) {
      baseConfig.code.theme.dark = override.shikiHlDark;
    }
    return baseConfig;
  },
  shikiHlLight: (baseConfig, override) => {
    if (override.shikiHlLight) {
      baseConfig.code.theme.light = override.shikiHlLight;
    }
    return baseConfig;
  }
};

exports.applyConfigOverrideMap = applyConfigOverrideMap;
exports.configSearchParamOverrideSchema = configSearchParamOverrideSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map