// src/zod/jupyter/nbconvert.ts
import { z } from "zod";
var nbConvertTemplateOptions = z.union([
  z.literal("lab"),
  z.literal("classic"),
  z.literal("reveal"),
  z.string()
]);
var nbConvertConfigSchema = z.object({
  nbconvertPath: z.string().optional().describe("The path to nbConvert. This option will likely be deprecated."),
  conversionTimeout: z.number().default(300).describe("The timeout in seconds with which to allow Jupyter notebooks to be converted to other formats. This option will likely be deprecated as the ability to output notebooks in alternative formats such as a pdf is being pushed back."),
  customConversionFunction: z.object({
    pdf: z.function().args(z.string().describe("Path to the notebook"), z.string().describe("Output directory")).returns(z.string().describe("utf-8 encoded string"))
  }).partial().optional(),
  execute: z.boolean().default(false).describe("Whether or not to execute notebooks before converting via nbConvert. Can be overriden with the ?nbConvertExec=true of ?nbConvertExec=false search param."),
  nbConvertTemplate: nbConvertTemplateOptions.default("classic").describe("The template option that is passed to nbConvert. Can be overridden by the search param ?nbConvertTemp=lab or ?nbConvertTemp=classic"),
  notebookOutputDir: z.string().default("/generated").describe("The fsRoot relative file path where converted notebooks should be saved.")
});
var nbConvertConfigSchemaOutput = z.object({
  nbconvertPath: z.string().optional(),
  conversionTimeout: z.number(),
  customConversionFunction: z.object({
    pdf: z.function().args(z.string(), z.string()).returns(z.string())
  }).partial().optional(),
  execute: z.boolean(),
  nbConvertTemplate: nbConvertTemplateOptions,
  notebookOutputDir: z.string()
});

export {
  nbConvertTemplateOptions,
  nbConvertConfigSchema,
  nbConvertConfigSchemaOutput
};
//# sourceMappingURL=chunk-AZ3BL532.mjs.map