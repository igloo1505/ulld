"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVHCD7QDPcjs = require('./chunk-VHCD7QDP.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateManyArgsSchema.ts
var _zod = require('zod');
var DailyFocusCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVHCD7QDPcjs.DailyFocusCreateManyInputSchema, _chunkVHCD7QDPcjs.DailyFocusCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateManyArgsSchema_default = DailyFocusCreateManyArgsSchema;




exports.DailyFocusCreateManyArgsSchema = DailyFocusCreateManyArgsSchema; exports.DailyFocusCreateManyArgsSchema_default = DailyFocusCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-PCWVF64U.cjs.map