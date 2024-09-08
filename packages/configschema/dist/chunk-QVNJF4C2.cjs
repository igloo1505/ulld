"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGTFPLYO5cjs = require('./chunk-GTFPLYO5.cjs');

// src/zod/terminalConfig.ts
var _zod = require('zod');
var terminalConfigSchema = _zod.z.object({
  logLevel: _chunkGTFPLYO5cjs.logLevelSchema.default("info")
}).default({});



exports.terminalConfigSchema = terminalConfigSchema;
//# sourceMappingURL=chunk-QVNJF4C2.cjs.map