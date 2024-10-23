"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY5TBEYKZcjs = require('./chunk-Y5TBEYKZ.cjs');


var _chunkUXOMHT3Pcjs = require('./chunk-UXOMHT3P.cjs');


var _chunkQ2N43QPZcjs = require('./chunk-Q2N43QPZ.cjs');


var _chunkFEK763L3cjs = require('./chunk-FEK763L3.cjs');


var _chunkQS5SULUDcjs = require('./chunk-QS5SULUD.cjs');


var _chunkZZIX7A7Dcjs = require('./chunk-ZZIX7A7D.cjs');


var _chunkI7JJRKXLcjs = require('./chunk-I7JJRKXL.cjs');


var _chunkQ445VJJQcjs = require('./chunk-Q445VJJQ.cjs');


var _chunkOHVUFY6Lcjs = require('./chunk-OHVUFY6L.cjs');


var _chunkMQKT3OULcjs = require('./chunk-MQKT3OUL.cjs');


var _chunkGV6X5BBPcjs = require('./chunk-GV6X5BBP.cjs');


var _chunkMAOXM423cjs = require('./chunk-MAOXM423.cjs');


var _chunkFZ5FBWJLcjs = require('./chunk-FZ5FBWJL.cjs');


var _chunk7VOB5O7Ocjs = require('./chunk-7VOB5O7O.cjs');


var _chunkMIX5AIE5cjs = require('./chunk-MIX5AIE5.cjs');


var _chunkC4XI6WMKcjs = require('./chunk-C4XI6WMK.cjs');


var _chunkMBLNSF6Dcjs = require('./chunk-MBLNSF6D.cjs');

// src/zod/refinedConfigs/appConfigOutputSchema.ts
var _zod = require('zod');
var appConfigOutputSchema = _zod.z.object({
  fsRoot: _zod.z.string(),
  alwaysPreferFs: _zod.z.boolean(),
  ignoreFilepaths: _zod.z.string().array(),
  tempDir: _zod.z.string(),
  generatedDir: _zod.z.string(),
  ignorePreferFsExtensions: _zod.z.string().array(),
  fileTypePriority: _chunkMQKT3OULcjs.allParsableFileExtensionSchema.array(),
  noteTypes: _chunkGV6X5BBPcjs.documentTypeConfigSchemaOutputSchema.array(),
  bibPath: _zod.z.string(),
  cslPath: _zod.z.string().optional(),
  dateHandling: _chunkMAOXM423cjs.dateParseConfigSchemaOutput,
  autoTag: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    tag: _zod.z.string().max(15, "Tags must be no more than 15 characters long.")
  }).array(),
  autoTopic: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    topic: _zod.z.string().max(50, "Topic must be no more than 50 characters long.")
  }).array(),
  autoSubject: _zod.z.object({
    path: _zod.z.string().describe("The glob pattern to test paths against."),
    subject: _zod.z.string().max(50, "Subjects must be no more than 15 characters long.")
  }).array(),
  linkAliases: _zod.z.record(_zod.z.string(), _zod.z.string().url()),
  code: _chunkQ445VJJQcjs.codeConfigSchemaOutput,
  math: _chunkZZIX7A7Dcjs.mathConfigSchemaOutput,
  plotting: _chunkQS5SULUDcjs.plotConfigSchemaOutput,
  navigation: _chunkC4XI6WMKcjs.navigationConfigSchemaOutput,
  UI: _chunkOHVUFY6Lcjs.mainUIConfigSchemaOutput,
  database: _chunkUXOMHT3Pcjs.databaseConfigSchemaOutput,
  jupyter: _chunkI7JJRKXLcjs.jupyterConfigSchemaOutput,
  credentials: _chunkQ2N43QPZcjs.credentialsConfigSchemaOutput,
  performance: _chunkMIX5AIE5cjs.performanceConfigSchemaOutput,
  terminal: _chunkFZ5FBWJLcjs.terminalConfigSchemaOutput,
  slots: _chunkY5TBEYKZcjs.pluginSlotSchemaOutput,
  build: _chunkFEK763L3cjs.buildOnlySchemaOutput,
  meta: _chunkMBLNSF6Dcjs.appMetaSchemaOutput,
  plugins: _chunk7VOB5O7Ocjs.pluginsConfigSchemaOutput
});



exports.appConfigOutputSchema = appConfigOutputSchema;
//# sourceMappingURL=chunk-UI4DD3RJ.cjs.map