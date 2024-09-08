import {
  featuresConfigSchema
} from "./chunk-7XKJIWWQ.js";
import {
  defaultIgnoreFilePaths
} from "./chunk-5HJJIMHO.js";
import {
  defaultNoteTypes
} from "./chunk-HHE6N47D.js";
import {
  databaseConfigSchema
} from "./chunk-5LBDPOU3.js";
import {
  credentialsConfigSchema
} from "./chunk-XVHSMXND.js";
import {
  buildOnlySchema
} from "./chunk-W3Z5TGQR.js";
import {
  plotConfigSchema
} from "./chunk-PR34AQNQ.js";
import {
  mathConfigSchema
} from "./chunk-VDTKMESP.js";
import {
  jupyterConfigSchema
} from "./chunk-3HPJIY3U.js";
import {
  mainUIConfigSchema
} from "./chunk-D743FZ2Q.js";
import {
  slashesTransform
} from "./chunk-DGANN2EY.js";
import {
  allParsableFileExtensionSchema
} from "./chunk-FHTQCW2Y.js";
import {
  dateParseConfigSchema
} from "./chunk-TNJIQDSN.js";
import {
  codeConfigSchema
} from "./chunk-C7Q6EMMC.js";
import {
  terminalConfigSchema
} from "./chunk-5VKVDMSO.js";
import {
  performanceConfigSchema
} from "./chunk-QY2CWEW7.js";
import {
  appMetaSchema
} from "./chunk-6VCBDKOB.js";
import {
  documentTypeConfigSchema
} from "./chunk-GQ44M3IR.js";
import {
  zodPathGlobTransform
} from "./chunk-PESBV4SX.js";
import {
  navigationConfigSchema
} from "./chunk-QZPOLBQN.js";

// src/zod/main.ts
import { z } from "zod";
import { pluginSlotSchema } from "@ulld/configschema/slotsSchema";
import {
  withForwardSlash,
  withForwardSlashOptional
} from "@ulld/utilities/fsUtils";
import staticBuildData from "@ulld/utilities/buildStaticData.json";
var zodRegexField = z.union([
  z.instanceof(RegExp),
  z.string(),
  z.object({
    original: z.string(),
    regex: z.instanceof(RegExp)
  })
]).array();
var pluginItemSchema = z.object({
  name: z.string(),
  version: z.string().default("latest"),
  parserIndex: z.number().min(0).default(50)
});
var zodRegexFieldTransform = (b) => {
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
  ).default(defaultIgnoreFilePaths).transform(zodRegexFieldTransform).default([]),
  tempDir: z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  generatedDir: z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(slashesTransform(true, false)),
  ignorePreferFsExtensions: z.union([z.string(), z.instanceof(RegExp)]).describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(zodPathGlobTransform).array().default([]),
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
  features: featuresConfigSchema,
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
  plugins: z.union([
    pluginItemSchema,
    pluginItemSchema.array(),
    z.string(),
    z.string().array()
  ]).transform((a) => {
    let items = Array.isArray(a) ? a : [a];
    let names = [];
    let newItems = items.map((s) => {
      names.push(typeof s === "string" ? s : s.name);
      return typeof s === "string" ? { name: s, version: "latest" } : s;
    });
    return newItems;
  }).default([
    {
      name: "@ulld/api",
      parserIndex: 0,
      version: staticBuildData.currentPackageVersions["@ulld/api"]
    },
    {
      name: "@ulld/plot",
      parserIndex: 0,
      version: staticBuildData.currentPackageVersions["@ulld/plot"]
    }
  ])
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

export {
  zodRegexField,
  zodRegexFieldTransform,
  appConfigSchema,
  appConfigSchemaTransform
};
//# sourceMappingURL=chunk-G4O4MXJY.js.map