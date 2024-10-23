import {
  defaultIgnoreFilePaths
} from "./chunk-YNYUEFQE.mjs";
import {
  defaultNoteTypes
} from "./chunk-L33HHCY3.mjs";
import {
  slashesTransform
} from "./chunk-UPQGPPWF.mjs";
import {
  pluginSlotSchema
} from "./chunk-ZMLXBMCS.mjs";
import {
  databaseConfigSchema
} from "./chunk-YD7ERF6Y.mjs";
import {
  credentialsConfigSchema
} from "./chunk-KEWTKAXN.mjs";
import {
  buildOnlySchema
} from "./chunk-R464NK3M.mjs";
import {
  plotConfigSchema
} from "./chunk-I3TUABK3.mjs";
import {
  mathConfigSchema
} from "./chunk-VJD4ZICZ.mjs";
import {
  jupyterConfigSchema
} from "./chunk-JVLW3XLC.mjs";
import {
  codeConfigSchema
} from "./chunk-YPPW64VT.mjs";
import {
  mainUIConfigSchema
} from "./chunk-RFADYZ37.mjs";
import {
  allParsableFileExtensionSchema
} from "./chunk-PPLLPMHA.mjs";
import {
  documentTypeConfigSchema
} from "./chunk-QY7EXTOX.mjs";
import {
  dateParseConfigSchema
} from "./chunk-IKGPSHLZ.mjs";
import {
  terminalConfigSchema
} from "./chunk-S2BPIAJV.mjs";
import {
  pluginsConfigSchema
} from "./chunk-JWHVYI5Y.mjs";
import {
  performanceConfigSchema
} from "./chunk-GMU7AEL3.mjs";
import {
  navigationConfigSchema
} from "./chunk-Y4CBYEJ6.mjs";
import {
  appMetaSchema
} from "./chunk-4TOS6Z5T.mjs";

// src/zod/main.ts
import { z } from "zod";
import {
  withForwardSlash,
  withForwardSlashOptional
} from "@ulld/utilities/fsUtils";
var zodRegexField = z.union([
  z.instanceof(RegExp),
  z.string(),
  z.object({
    original: z.string(),
    regex: z.string().or(z.instanceof(RegExp)).transform((x) => x instanceof RegExp ? x : new RegExp(x))
  })
]).array();
var parsedZodRegexField = z.string().array().default([]);
var zodRegexFieldTransform = (b = []) => {
  return b.map((a) => {
    if (typeof a === "string") {
      return {
        original: a,
        regex: new RegExp(a)
      };
    }
    if (a instanceof RegExp) {
      return {
        original: a.source,
        regex: a
      };
    }
    if (typeof a === "object" && "original" in a && "regex" in a) {
      return a;
    }
    return a;
  });
};
var globInputToString = (b = []) => {
  return b.map((a) => {
    if (a instanceof RegExp) {
      return a.source;
    }
    if (typeof a === "object" && "original" in a && "regex" in a) {
      return a.original;
    }
    return a;
  });
};
var appConfigSchema = z.object({
  fsRoot: z.string().describe("The path to the root of the folder which holds your notes.").transform(slashesTransform(true, false)),
  alwaysPreferFs: z.boolean().default(false).describe(
    "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
  ),
  ignoreFilepaths: zodRegexField.describe(
    "File paths within the root directory which should be completely ignored by ULLD."
  ).default(defaultIgnoreFilePaths).transform(globInputToString),
  tempDir: z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  generatedDir: z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  ignorePreferFsExtensions: zodRegexField.describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(globInputToString).default([]),
  fileTypePriority: allParsableFileExtensionSchema.array().describe(
    "An ordered list of different parsable file types. This is only required when a file name exists with multiple parsable file extensions in the same directory. In most cases the default is adequate."
  ).default([
    ".mdx",
    ".md",
    ".ipynb",
    ".pdf",
    ".json",
    ".csv",
    ".tsv",
    ".excel",
    ".tex",
    ".db",
    ".html"
  ]),
  noteTypes: documentTypeConfigSchema.array().default(defaultNoteTypes).transform((x) => {
    let ids = x.map((l) => l.id);
    let data = x;
    for (const defaultNoteType of defaultNoteTypes) {
      if (!ids.includes(defaultNoteType.id)) {
        data.push(documentTypeConfigSchema.parse(defaultNoteType));
      }
    }
    return data;
  }).describe(
    "This is the main location to describe the structure of your notes. Break up your note directory into as many categories as you like, but this app is designed to allow for increasingly refined searching and filtering. Categories of 'math', 'physics' and 'chemistry' would likely fit most users better than 'calc1', 'calc2', 'linearAlgebra', etc. For use cases such as those, please look at the 'autoTag', 'autoSubject', and 'autoTopic' feature."
  ),
  bibPath: z.string().default("/citations.bib").transform(withForwardSlash).describe(
    "The root relative path to the .bib file to be integrated within your app."
  ),
  cslPath: z.string().optional().transform(withForwardSlashOptional).describe(
    "The root relative path to the .csl file to be used for styling citations. An incredibly robust repo of different csl styles can be found at https://github.com/citation-style-language/styles"
  ),
  dateHandling: dateParseConfigSchema,
  autoTag: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    tag: z.string().max(15, "Tags must be no more than 15 characters long.")
  }).array().default([]),
  autoTopic: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    topic: z.string().max(50, "Topic must be no more than 50 characters long.")
  }).array().default([]),
  autoSubject: z.object({
    path: z.string().describe("The glob pattern to test paths against."),
    subject: z.string().max(50, "Subjects must be no more than 15 characters long.")
  }).array().default([]),
  linkAliases: z.record(z.string(), z.string().url()).describe("A map of key value pairs of commonly referenced urls.").default({}),
  // features: featuresConfigSchema,
  code: codeConfigSchema,
  math: mathConfigSchema,
  plotting: plotConfigSchema,
  navigation: navigationConfigSchema,
  UI: mainUIConfigSchema,
  database: databaseConfigSchema,
  jupyter: jupyterConfigSchema.default({}),
  credentials: credentialsConfigSchema,
  performance: performanceConfigSchema,
  terminal: terminalConfigSchema,
  slots: pluginSlotSchema.default({}),
  build: buildOnlySchema,
  meta: appMetaSchema,
  plugins: pluginsConfigSchema
});
var appConfigSchemaTransform = (data) => {
  if (data.cslPath?.includes(data.fsRoot)) {
    data.cslPath = data.cslPath.replace(data.fsRoot, "");
  }
  if (data.bibPath?.includes(data.fsRoot)) {
    data.bibPath = data.bibPath.replace(data.fsRoot, "");
  }
  return data;
};
var appConfigDeepPartial = appConfigSchema.deepPartial();

export {
  zodRegexField,
  parsedZodRegexField,
  zodRegexFieldTransform,
  globInputToString,
  appConfigSchema,
  appConfigSchemaTransform,
  appConfigDeepPartial
};
//# sourceMappingURL=chunk-2YKRUPDT.mjs.map