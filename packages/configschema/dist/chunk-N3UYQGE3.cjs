"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/jupyter/nbconvert.ts
var _zod = require('zod');
var nbConvertTemplateOptions = _zod.z.union([
  _zod.z.literal("lab"),
  _zod.z.literal("classic"),
  _zod.z.literal("reveal"),
  _zod.z.string()
]);
var nbConvertConfigSchema = _zod.z.object({
  nbconvertPath: _zod.z.string().optional().describe("The path to nbConvert. This option will likely be deprecated."),
  conversionTimeout: _zod.z.number().default(300).describe("The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."),
  customConversionFunction: _zod.z.object({
    pdf: _zod.z.function().args(_zod.z.string().describe("Path to the notebook"), _zod.z.string().describe("Output directory")).returns(_zod.z.string().describe("utf-8 encoded string"))
  }).partial().optional(),
  execute: _zod.z.boolean().default(false).describe("Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."),
  nbConvertTemplate: nbConvertTemplateOptions.default("classic").describe("The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"),
  notebookOutputDir: _zod.z.string().default("/generated").describe("The fsRoot relative file path where converted notebooks should be saved.")
});
var nbConvertConfigSchemaOutput = _zod.z.object({
  nbconvertPath: _zod.z.string().optional(),
  conversionTimeout: _zod.z.number(),
  customConversionFunction: _zod.z.object({
    pdf: _zod.z.function().args(_zod.z.string(), _zod.z.string()).returns(_zod.z.string())
  }).partial().optional(),
  execute: _zod.z.boolean(),
  nbConvertTemplate: nbConvertTemplateOptions,
  notebookOutputDir: _zod.z.string()
});





exports.nbConvertTemplateOptions = nbConvertTemplateOptions; exports.nbConvertConfigSchema = nbConvertConfigSchema; exports.nbConvertConfigSchemaOutput = nbConvertConfigSchemaOutput;
//# sourceMappingURL=chunk-N3UYQGE3.cjs.map