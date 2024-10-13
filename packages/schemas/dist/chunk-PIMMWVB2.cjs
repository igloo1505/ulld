"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVHCD7QDPcjs = require('./chunk-VHCD7QDP.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var DailyFocusCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVHCD7QDPcjs.DailyFocusCreateManyInputSchema, _chunkVHCD7QDPcjs.DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateManyAndReturnArgsSchema_default = DailyFocusCreateManyAndReturnArgsSchema;




exports.DailyFocusCreateManyAndReturnArgsSchema = DailyFocusCreateManyAndReturnArgsSchema; exports.DailyFocusCreateManyAndReturnArgsSchema_default = DailyFocusCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-PIMMWVB2.cjs.map