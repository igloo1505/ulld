"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC6GGOV5Jcjs = require('./chunk-C6GGOV5J.cjs');

// src/database/outputTypeSchemas/DailyFocusFindUniqueArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusFindUniqueArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkC6GGOV5Jcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusFindUniqueArgsSchema_default = DailyFocusFindUniqueArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusFindUniqueArgsSchema = DailyFocusFindUniqueArgsSchema; exports.DailyFocusFindUniqueArgsSchema_default = DailyFocusFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-KVVCKA3R.cjs.map