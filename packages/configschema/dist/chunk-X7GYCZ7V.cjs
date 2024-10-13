"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJUH5FQQRcjs = require('./chunk-JUH5FQQR.cjs');

// src/zod/terminalConfig.ts
var _zod = require('zod');
var terminalConfigSchema = _zod.z.object({
  logLevel: _chunkJUH5FQQRcjs.logLevelSchema.default("info")
}).default({});



exports.terminalConfigSchema = terminalConfigSchema;
//# sourceMappingURL=chunk-X7GYCZ7V.cjs.map