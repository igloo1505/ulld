"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5DEJBS5Ycjs = require('./chunk-5DEJBS5Y.cjs');

// src/zod/terminalConfig.ts
var _zod = require('zod');
var terminalConfigSchema = _zod.z.object({
  logLevel: _chunk5DEJBS5Ycjs.logLevelSchema.default("info")
}).default({});



exports.terminalConfigSchema = terminalConfigSchema;
//# sourceMappingURL=chunk-PXSYJX6W.cjs.map