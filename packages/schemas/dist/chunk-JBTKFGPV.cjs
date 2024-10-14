"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQETSPDGNcjs = require('./chunk-QETSPDGN.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateManyArgsSchema.ts
var _zod = require('zod');
var DailyFocusCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQETSPDGNcjs.DailyFocusCreateManyInputSchema, _chunkQETSPDGNcjs.DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateManyArgsSchema_default = DailyFocusCreateManyArgsSchema;




exports.DailyFocusCreateManyArgsSchema = DailyFocusCreateManyArgsSchema; exports.DailyFocusCreateManyArgsSchema_default = DailyFocusCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-JBTKFGPV.cjs.map