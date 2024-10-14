"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS3KRP6KKcjs = require('./chunk-S3KRP6KK.cjs');


var _chunkXIW7HTFDcjs = require('./chunk-XIW7HTFD.cjs');


var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');

// src/database/outputTypeSchemas/DailyFocusUpdateArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusUpdateArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  data: _zod.z.union([_chunkS3KRP6KKcjs.DailyFocusUpdateInputSchema, _chunkXIW7HTFDcjs.DailyFocusUncheckedUpdateInputSchema]),
  where: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusUpdateArgsSchema_default = DailyFocusUpdateArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusUpdateArgsSchema = DailyFocusUpdateArgsSchema; exports.DailyFocusUpdateArgsSchema_default = DailyFocusUpdateArgsSchema_default;
//# sourceMappingURL=chunk-PKMGMP2P.cjs.map