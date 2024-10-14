"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkBMKGPO6Qcjs = require('./chunk-BMKGPO6Q.cjs');


var _chunk3VEE7NEQcjs = require('./chunk-3VEE7NEQ.cjs');


var _chunk46A3VLREcjs = require('./chunk-46A3VLRE.cjs');


var _chunk23W3BADLcjs = require('./chunk-23W3BADL.cjs');


var _chunkSAAJV3BHcjs = require('./chunk-SAAJV3BH.cjs');


var _chunkH3WYQVXAcjs = require('./chunk-H3WYQVXA.cjs');


var _chunkTOJXZHVYcjs = require('./chunk-TOJXZHVY.cjs');


var _chunkB4O6LZ64cjs = require('./chunk-B4O6LZ64.cjs');


var _chunkM677MBJMcjs = require('./chunk-M677MBJM.cjs');


var _chunkYIUCN42Fcjs = require('./chunk-YIUCN42F.cjs');


var _chunkJ367RNK6cjs = require('./chunk-J367RNK6.cjs');


var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkDAJQG6UYcjs = require('./chunk-DAJQG6UY.cjs');


var _chunkBCQTQSGVcjs = require('./chunk-BCQTQSGV.cjs');


var _chunkX7GYCZ7Vcjs = require('./chunk-X7GYCZ7V.cjs');


var _chunkXV6PA66Ccjs = require('./chunk-XV6PA66C.cjs');


var _chunkKO6QBID2cjs = require('./chunk-KO6QBID2.cjs');


var _chunkDN3GUCEKcjs = require('./chunk-DN3GUCEK.cjs');


var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');


var _chunkJD2KBTXXcjs = require('./chunk-JD2KBTXX.cjs');

// src/zod/main.ts
var _zod = require('zod');
var _slotsSchema = require('@ulld/configschema/slotsSchema');



var _fsUtils = require('@ulld/utilities/fsUtils');
var _internalDataHelpers = require('@ulld/utilities/internalDataHelpers');
var zodRegexField = _zod.z.union([
  _zod.z.instanceof(RegExp),
  _zod.z.string(),
  _zod.z.object({
    original: _zod.z.string(),
    regex: _zod.z.string().or(_zod.z.instanceof(RegExp)).transform((x) => x instanceof RegExp ? x : new RegExp(x))
  })
]).array();
var pluginItemSchema = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string().default("latest"),
  parserIndex: _zod.z.number().min(0).default(50)
});
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
var getDefaultPlugins = () => {
  const currentPackageVersions = _internalDataHelpers.getCurrentPackageVersions.call(void 0, );
  return [
    {
      name: "@ulld/api",
      parserIndex: 0,
      version: currentPackageVersions["@ulld/api"]
    },
    {
      name: "@ulld/plot",
      parserIndex: 0,
      version: currentPackageVersions["@ulld/plot"]
    }
  ];
};
var appConfigSchema = _zod.z.object({
  fsRoot: _zod.z.string().describe("The path to the root of the folder which holds your notes.").transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  alwaysPreferFs: _zod.z.boolean().default(false).describe(
    "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
  ),
  ignoreFilepaths: zodRegexField.describe(
    "File paths within the root directory which should be completely ignored by ULLD."
  ).default(_chunkM677MBJMcjs.defaultIgnoreFilePaths).transform(zodRegexFieldTransform),
  tempDir: _zod.z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  generatedDir: _zod.z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  ignorePreferFsExtensions: _zod.z.union([
    _zod.z.string(),
    _zod.z.instanceof(RegExp),
    _zod.z.object({
      original: _zod.z.string(),
      regex: _zod.z.instanceof(RegExp)
    })
  ]).describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(_chunkJUH5FQQRcjs.zodPathGlobTransform).array().default([]),
  fileTypePriority: _chunkMQKT3OULcjs.allParsableFileExtensionSchema.array().describe(
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
  noteTypes: _chunkDN3GUCEKcjs.documentTypeConfigSchema.array().default(_chunkBMKGPO6Qcjs.defaultNoteTypes).transform((x) => {
    let ids = x.map((l) => l.id);
    let data = x;
    for (const defaultNoteType of _chunkBMKGPO6Qcjs.defaultNoteTypes) {
      if (!ids.includes(defaultNoteType.id)) {
        data.push(_chunkDN3GUCEKcjs.documentTypeConfigSchema.parse(defaultNoteType));
      }
    }
    return data;
  }).describe(
    "This is the main location to describe the structure of your notes. Break up your note directory into as many categories as you like, but this app is designed to allow for increasingly refined searching and filtering. Categories of 'math', 'physics' and 'chemistry' would likely fit most users better than 'calc1', 'calc2', 'linearAlgebra', etc. For use cases such as those, please look at the 'autoTag', 'autoSubject', and 'autoTopic' feature."
  ),
  bibPath: _zod.z.string().default("/citations.bib").transform(_fsUtils.withForwardSlash).describe(
    "The root relative path to the .bib file to be integrated within your app."
  ),
  cslPath: _zod.z.string().optional().transform(_fsUtils.withForwardSlashOptional).describe(
    "The root relative path to the .csl file to be used for styling citations. An incredibly robust repo of different csl styles can be found at https://github.com/citation-style-language/styles"
  ),
  dateHandling: _chunkDAJQG6UYcjs.dateParseConfigSchema,
  autoTag: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    tag: _zod.z.string().max(15, "Tags must be no more than 15 characters long.")
  }).array().default([]),
  autoTopic: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    topic: _zod.z.string().max(50, "Topic must be no more than 50 characters long.")
  }).array().default([]),
  autoSubject: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    subject: _zod.z.string().max(50, "Subjects must be no more than 15 characters long.")
  }).array().default([]),
  linkAliases: _zod.z.record(_zod.z.string(), _zod.z.string().url()).describe("A map of key value pairs of commonly referenced urls.").default({}),
  features: _chunkB4O6LZ64cjs.featuresConfigSchema,
  code: _chunkBCQTQSGVcjs.codeConfigSchema,
  math: _chunkH3WYQVXAcjs.mathConfigSchema,
  plotting: _chunkSAAJV3BHcjs.plotConfigSchema,
  navigation: _chunkJD2KBTXXcjs.navigationConfigSchema,
  UI: _chunkYIUCN42Fcjs.mainUIConfigSchema,
  database: _chunk3VEE7NEQcjs.databaseConfigSchema,
  jupyter: _chunkTOJXZHVYcjs.jupyterConfigSchema.default({}),
  credentials: _chunk46A3VLREcjs.credentialsConfigSchema,
  performance: _chunkXV6PA66Ccjs.performanceConfigSchema,
  terminal: _chunkX7GYCZ7Vcjs.terminalConfigSchema,
  slots: _slotsSchema.pluginSlotSchema.default({}),
  build: _chunk23W3BADLcjs.buildOnlySchema,
  meta: _chunkKO6QBID2cjs.appMetaSchema,
  plugins: _zod.z.union([
    pluginItemSchema,
    pluginItemSchema.array(),
    _zod.z.string(),
    _zod.z.string().array()
  ]).default(getDefaultPlugins()).transform((a = []) => {
    let items = Array.isArray(a) ? a : [a];
    let names = [];
    let newItems = items.map((s) => {
      names.push(typeof s === "string" ? s : s.name);
      return typeof s === "string" ? { name: s, version: "latest" } : s;
    });
    return newItems;
  })
});
var appConfigSchemaTransform = (data) => {
  if (_optionalChain([data, 'access', _ => _.cslPath, 'optionalAccess', _2 => _2.includes, 'call', _3 => _3(data.fsRoot)])) {
    data.cslPath = data.cslPath.replace(data.fsRoot, "");
  }
  if (_optionalChain([data, 'access', _4 => _4.bibPath, 'optionalAccess', _5 => _5.includes, 'call', _6 => _6(data.fsRoot)])) {
    data.bibPath = data.bibPath.replace(data.fsRoot, "");
  }
  return data;
};
var appConfigDeepPartial = appConfigSchema.deepPartial();







exports.zodRegexField = zodRegexField; exports.zodRegexFieldTransform = zodRegexFieldTransform; exports.appConfigSchema = appConfigSchema; exports.appConfigSchemaTransform = appConfigSchemaTransform; exports.appConfigDeepPartial = appConfigDeepPartial;
//# sourceMappingURL=chunk-Z3HOBR6G.cjs.map