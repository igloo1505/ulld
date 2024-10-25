import {
  pluginSlotSchemaOutput
} from "./chunk-ZMLXBMCS.mjs";
import {
  databaseConfigSchemaOutput
} from "./chunk-YD7ERF6Y.mjs";
import {
  credentialsConfigSchemaOutput
} from "./chunk-KEWTKAXN.mjs";
import {
  buildOnlySchemaOutput
} from "./chunk-R464NK3M.mjs";
import {
  plotConfigSchemaOutput
} from "./chunk-I3TUABK3.mjs";
import {
  mathConfigSchemaOutput
} from "./chunk-VJD4ZICZ.mjs";
import {
  jupyterConfigSchemaOutput
} from "./chunk-JVLW3XLC.mjs";
import {
  codeConfigSchemaOutput
} from "./chunk-YPPW64VT.mjs";
import {
  mainUIConfigSchemaOutput
} from "./chunk-LEIGK6CT.mjs";
import {
  allParsableFileExtensionSchema
} from "./chunk-PPLLPMHA.mjs";
import {
  documentTypeConfigSchemaOutputSchema
} from "./chunk-DSCZCBFM.mjs";
import {
  dateParseConfigSchemaOutput
} from "./chunk-IKGPSHLZ.mjs";
import {
  terminalConfigSchemaOutput
} from "./chunk-S2BPIAJV.mjs";
import {
  pluginsConfigSchemaOutput
} from "./chunk-JWHVYI5Y.mjs";
import {
  performanceConfigSchemaOutput
} from "./chunk-GMU7AEL3.mjs";
import {
  navigationConfigSchemaOutput
} from "./chunk-U5NPFAWN.mjs";
import {
  appMetaSchemaOutput
} from "./chunk-4TOS6Z5T.mjs";

// src/zod/refinedConfigs/appConfigOutputSchema.ts
import { z } from "zod";
var appConfigOutputSchema = z.object({
  fsRoot: z.string(),
  alwaysPreferFs: z.boolean(),
  ignoreFilepaths: z.string().array(),
  tempDir: z.string(),
  generatedDir: z.string(),
  ignorePreferFsExtensions: z.string().array(),
  fileTypePriority: allParsableFileExtensionSchema.array(),
  noteTypes: documentTypeConfigSchemaOutputSchema.array(),
  bibPath: z.string(),
  cslPath: z.string().optional(),
  dateHandling: dateParseConfigSchemaOutput,
  autoTag: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    tag: z.string().max(15, "Tags must be no more than 15 characters long.")
  }).array(),
  autoTopic: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    topic: z.string().max(50, "Topic must be no more than 50 characters long.")
  }).array(),
  autoSubject: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    subject: z.string().max(50, "Subjects must be no more than 15 characters long.")
  }).array(),
  linkAliases: z.record(z.string(), z.string().url()),
  code: codeConfigSchemaOutput,
  math: mathConfigSchemaOutput,
  plotting: plotConfigSchemaOutput,
  navigation: navigationConfigSchemaOutput,
  UI: mainUIConfigSchemaOutput,
  database: databaseConfigSchemaOutput,
  jupyter: jupyterConfigSchemaOutput,
  credentials: credentialsConfigSchemaOutput,
  performance: performanceConfigSchemaOutput,
  terminal: terminalConfigSchemaOutput,
  slots: pluginSlotSchemaOutput,
  build: buildOnlySchemaOutput,
  meta: appMetaSchemaOutput,
  plugins: pluginsConfigSchemaOutput
});

export {
  appConfigOutputSchema
};
//# sourceMappingURL=chunk-PFMJJKM3.mjs.map