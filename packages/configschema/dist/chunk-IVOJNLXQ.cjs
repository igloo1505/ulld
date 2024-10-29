"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkM677MBJMcjs = require('./chunk-M677MBJM.cjs');


var _chunkBMKGPO6Qcjs = require('./chunk-BMKGPO6Q.cjs');


var _chunkJ367RNK6cjs = require('./chunk-J367RNK6.cjs');


var _chunkY5TBEYKZcjs = require('./chunk-Y5TBEYKZ.cjs');


var _chunkUXOMHT3Pcjs = require('./chunk-UXOMHT3P.cjs');


var _chunkQ2N43QPZcjs = require('./chunk-Q2N43QPZ.cjs');


var _chunkFEK763L3cjs = require('./chunk-FEK763L3.cjs');


var _chunkQS5SULUDcjs = require('./chunk-QS5SULUD.cjs');


var _chunkZZIX7A7Dcjs = require('./chunk-ZZIX7A7D.cjs');


var _chunkI7JJRKXLcjs = require('./chunk-I7JJRKXL.cjs');


var _chunkQ445VJJQcjs = require('./chunk-Q445VJJQ.cjs');


var _chunkEGQZKQPCcjs = require('./chunk-EGQZKQPC.cjs');


var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkIN5UY237cjs = require('./chunk-IN5UY237.cjs');


var _chunkMAOXM423cjs = require('./chunk-MAOXM423.cjs');


var _chunkFZ5FBWJLcjs = require('./chunk-FZ5FBWJL.cjs');


var _chunk7VOB5O7Ocjs = require('./chunk-7VOB5O7O.cjs');


var _chunkMIX5AIE5cjs = require('./chunk-MIX5AIE5.cjs');


var _chunkEZLX3AZ7cjs = require('./chunk-EZLX3AZ7.cjs');


var _chunkMBLNSF6Dcjs = require('./chunk-MBLNSF6D.cjs');

// src/zod/main.ts
var _zod = require('zod');



var _fsUtils = require('@ulld/utilities/fsUtils');
var zodRegexField = _zod.z.union([
  _zod.z.instanceof(RegExp),
  _zod.z.string(),
  _zod.z.object({
    original: _zod.z.string(),
    regex: _zod.z.string().or(_zod.z.instanceof(RegExp)).transform((x) => x instanceof RegExp ? x : new RegExp(x))
  })
]).array();
var parsedZodRegexField = _zod.z.string().array().default([]);
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
var appConfigSchema = _zod.z.object({
  fsRoot: _zod.z.string().describe("The path to the root of the folder which holds your notes.").transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  alwaysPreferFs: _zod.z.boolean().default(false).describe(
    "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
  ),
  ignoreFilepaths: zodRegexField.describe(
    "File paths within the root directory which should be completely ignored by ULLD."
  ).default(_chunkM677MBJMcjs.defaultIgnoreFilePaths).transform(globInputToString),
  tempDir: _zod.z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  generatedDir: _zod.z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(_chunkJ367RNK6cjs.slashesTransform.call(void 0, true, false)),
  ignorePreferFsExtensions: zodRegexField.describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(globInputToString).default([]),
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
  noteTypes: _chunkIN5UY237cjs.documentTypeConfigSchema.array().default(_chunkBMKGPO6Qcjs.defaultNoteTypes).transform((x) => {
    let ids = x.map((l) => l.id);
    let data = x;
    for (const defaultNoteType of _chunkBMKGPO6Qcjs.defaultNoteTypes) {
      if (!ids.includes(defaultNoteType.id)) {
        data.push(_chunkIN5UY237cjs.documentTypeConfigSchema.parse(defaultNoteType));
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
  dateHandling: _chunkMAOXM423cjs.dateParseConfigSchema,
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
  // features: featuresConfigSchema,
  code: _chunkQ445VJJQcjs.codeConfigSchema,
  math: _chunkZZIX7A7Dcjs.mathConfigSchema,
  plotting: _chunkQS5SULUDcjs.plotConfigSchema,
  navigation: _chunkEZLX3AZ7cjs.navigationConfigSchema,
  UI: _chunkEGQZKQPCcjs.mainUIConfigSchema,
  database: _chunkUXOMHT3Pcjs.databaseConfigSchema,
  jupyter: _chunkI7JJRKXLcjs.jupyterConfigSchema.default({}),
  credentials: _chunkQ2N43QPZcjs.credentialsConfigSchema,
  performance: _chunkMIX5AIE5cjs.performanceConfigSchema,
  terminal: _chunkFZ5FBWJLcjs.terminalConfigSchema,
  slots: _chunkY5TBEYKZcjs.pluginSlotSchema.default({}),
  build: _chunkFEK763L3cjs.buildOnlySchema,
  meta: _chunkMBLNSF6Dcjs.appMetaSchema,
  plugins: _chunk7VOB5O7Ocjs.pluginsConfigSchema
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









exports.zodRegexField = zodRegexField; exports.parsedZodRegexField = parsedZodRegexField; exports.zodRegexFieldTransform = zodRegexFieldTransform; exports.globInputToString = globInputToString; exports.appConfigSchema = appConfigSchema; exports.appConfigSchemaTransform = appConfigSchemaTransform; exports.appConfigDeepPartial = appConfigDeepPartial;
//# sourceMappingURL=chunk-IVOJNLXQ.cjs.map