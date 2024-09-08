"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkI7MZI7RYcjs = require('./chunk-I7MZI7RY.cjs');


var _chunkQDJ2YVFHcjs = require('./chunk-QDJ2YVFH.cjs');


var _chunkIUNLIPLRcjs = require('./chunk-IUNLIPLR.cjs');


var _chunkBLK4DDNMcjs = require('./chunk-BLK4DDNM.cjs');


var _chunkGBCQBBTNcjs = require('./chunk-GBCQBBTN.cjs');


var _chunkIAIQ6ZJVcjs = require('./chunk-IAIQ6ZJV.cjs');


var _chunk7SUMHZ73cjs = require('./chunk-7SUMHZ73.cjs');


var _chunkEVQ3OOMIcjs = require('./chunk-EVQ3OOMI.cjs');


var _chunkLE6CYVFHcjs = require('./chunk-LE6CYVFH.cjs');


var _chunk7K4IXJMCcjs = require('./chunk-7K4IXJMC.cjs');


var _chunkMDJ5SJNCcjs = require('./chunk-MDJ5SJNC.cjs');


var _chunk7YET3AMWcjs = require('./chunk-7YET3AMW.cjs');


var _chunk4K7K6MSVcjs = require('./chunk-4K7K6MSV.cjs');


var _chunkEDVEKMUScjs = require('./chunk-EDVEKMUS.cjs');


var _chunkQVNJF4C2cjs = require('./chunk-QVNJF4C2.cjs');


var _chunkLD3RCBGUcjs = require('./chunk-LD3RCBGU.cjs');


var _chunkLQE4Q3OFcjs = require('./chunk-LQE4Q3OF.cjs');


var _chunkVFA3NO2Gcjs = require('./chunk-VFA3NO2G.cjs');


var _chunkGTFPLYO5cjs = require('./chunk-GTFPLYO5.cjs');


var _chunk3ZQ4RWTPcjs = require('./chunk-3ZQ4RWTP.cjs');

// src/zod/main.ts
var _zod = require('zod');
var _slotsSchema = require('@ulld/configschema/slotsSchema');



var _fsUtils = require('@ulld/utilities/fsUtils');
var _buildStaticDatajson = require('@ulld/utilities/buildStaticData.json'); var _buildStaticDatajson2 = _interopRequireDefault(_buildStaticDatajson);
var zodRegexField = _zod.z.union([
  _zod.z.instanceof(RegExp),
  _zod.z.string(),
  _zod.z.object({
    original: _zod.z.string(),
    regex: _zod.z.instanceof(RegExp)
  })
]).array();
var pluginItemSchema = _zod.z.object({
  name: _zod.z.string(),
  version: _zod.z.string().default("latest"),
  parserIndex: _zod.z.number().min(0).default(50)
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
var appConfigSchema = _zod.z.object({
  fsRoot: _zod.z.string().describe("The path to the root of the folder which holds your notes.").transform(_chunkMDJ5SJNCcjs.slashesTransform.call(void 0, true, false)),
  alwaysPreferFs: _zod.z.boolean().default(false).describe(
    "Always read directly from the file system, except in cases where use of a database is required. This will negatively impact performance and portability, but might be necessary for specific use cases."
  ),
  ignoreFilepaths: zodRegexField.describe(
    "File paths within the root directory which should be completely ignored by ULLD."
  ).default(_chunkQDJ2YVFHcjs.defaultIgnoreFilePaths).transform(zodRegexFieldTransform).default([]),
  tempDir: _zod.z.string().default("__temp__").describe(
    "fsRoot relative path to the temporary directory. In almost all use cases this can be left to it's default value."
  ).transform(_chunkMDJ5SJNCcjs.slashesTransform.call(void 0, true, false)),
  generatedDir: _zod.z.string().default("/generated").describe(
    "fsRoot relative path to the directory for automatically generated content. In almost all use cases this can be left to it's default value."
  ).transform(_chunkMDJ5SJNCcjs.slashesTransform.call(void 0, true, false)),
  ignorePreferFsExtensions: _zod.z.union([_zod.z.string(), _zod.z.instanceof(RegExp)]).describe(
    "An array of either glob strings or RegExp's with which to test file paths. Those evaluating to true will always be rendered from the database, regardless of other global settings."
  ).transform(_chunkGTFPLYO5cjs.zodPathGlobTransform).array().default([]),
  fileTypePriority: _chunk7YET3AMWcjs.allParsableFileExtensionSchema.array().describe(
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
  noteTypes: _chunkVFA3NO2Gcjs.documentTypeConfigSchema.array().default(_chunkIUNLIPLRcjs.defaultNoteTypes).transform((x) => {
    let ids = x.map((l) => l.id);
    let data = x;
    for (const defaultNoteType of _chunkIUNLIPLRcjs.defaultNoteTypes) {
      if (!ids.includes(defaultNoteType.id)) {
        data.push(_chunkVFA3NO2Gcjs.documentTypeConfigSchema.parse(defaultNoteType));
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
  dateHandling: _chunk4K7K6MSVcjs.dateParseConfigSchema,
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
  features: _chunkI7MZI7RYcjs.featuresConfigSchema,
  code: _chunkEDVEKMUScjs.codeConfigSchema,
  math: _chunkEVQ3OOMIcjs.mathConfigSchema,
  plotting: _chunk7SUMHZ73cjs.plotConfigSchema,
  navigation: _chunk3ZQ4RWTPcjs.navigationConfigSchema,
  UI: _chunk7K4IXJMCcjs.mainUIConfigSchema,
  database: _chunkBLK4DDNMcjs.databaseConfigSchema,
  jupyter: _chunkLE6CYVFHcjs.jupyterConfigSchema.default({}),
  credentials: _chunkGBCQBBTNcjs.credentialsConfigSchema,
  performance: _chunkLD3RCBGUcjs.performanceConfigSchema,
  terminal: _chunkQVNJF4C2cjs.terminalConfigSchema,
  slots: _slotsSchema.pluginSlotSchema.default({}),
  build: _chunkIAIQ6ZJVcjs.buildOnlySchema,
  meta: _chunkLQE4Q3OFcjs.appMetaSchema,
  plugins: _zod.z.union([
    pluginItemSchema,
    pluginItemSchema.array(),
    _zod.z.string(),
    _zod.z.string().array()
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
      version: _buildStaticDatajson2.default.currentPackageVersions["@ulld/api"]
    },
    {
      name: "@ulld/plot",
      parserIndex: 0,
      version: _buildStaticDatajson2.default.currentPackageVersions["@ulld/plot"]
    }
  ])
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






exports.zodRegexField = zodRegexField; exports.zodRegexFieldTransform = zodRegexFieldTransform; exports.appConfigSchema = appConfigSchema; exports.appConfigSchemaTransform = appConfigSchemaTransform;
//# sourceMappingURL=chunk-56GHHGNJ.cjs.map