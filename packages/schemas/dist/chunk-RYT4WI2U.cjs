"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQETSPDGNcjs = require('./chunk-QETSPDGN.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DailyFocusCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQETSPDGNcjs.DailyFocusCreateManyInputSchema, _chunkQETSPDGNcjs.DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateManyAndReturnArgsSchema_default = DailyFocusCreateManyAndReturnArgsSchema;




exports.DailyFocusCreateManyAndReturnArgsSchema = DailyFocusCreateManyAndReturnArgsSchema; exports.DailyFocusCreateManyAndReturnArgsSchema_default = DailyFocusCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-RYT4WI2U.cjs.map