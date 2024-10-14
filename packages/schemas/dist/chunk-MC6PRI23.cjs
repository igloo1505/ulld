"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');

// src/database/outputTypeSchemas/DailyFocusDeleteArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusDeleteArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusDeleteArgsSchema_default = DailyFocusDeleteArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusDeleteArgsSchema = DailyFocusDeleteArgsSchema; exports.DailyFocusDeleteArgsSchema_default = DailyFocusDeleteArgsSchema_default;
//# sourceMappingURL=chunk-MC6PRI23.cjs.map