"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');

// src/zod/terminalConfig.ts
var _zod = require('zod');
var terminalConfigSchema = _zod.z.object({
  logLevel: _chunkJUH5FQQRcjs.logLevelSchema.default("info")
}).default({});
var terminalConfigSchemaOutput = _zod.z.object({
  logLevel: _chunkJUH5FQQRcjs.logLevelSchema
});




exports.terminalConfigSchema = terminalConfigSchema; exports.terminalConfigSchemaOutput = terminalConfigSchemaOutput;
//# sourceMappingURL=chunk-FZ5FBWJL.cjs.map