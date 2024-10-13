"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNIIQUTVPcjs = require('./chunk-NIIQUTVP.cjs');


var _chunkUFIPCYPZcjs = require('./chunk-UFIPCYPZ.cjs');


var _chunkC6GGOV5Jcjs = require('./chunk-C6GGOV5J.cjs');

// src/database/outputTypeSchemas/DailyFocusUpdateArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusUpdateArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  data: _zod.z.union([_chunkNIIQUTVPcjs.DailyFocusUpdateInputSchema, _chunkUFIPCYPZcjs.DailyFocusUncheckedUpdateInputSchema]),
  where: _chunkC6GGOV5Jcjs.DailyFocusWhereUniqueInputSchema
}).strict();
var DailyFocusUpdateArgsSchema_default = DailyFocusUpdateArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusUpdateArgsSchema = DailyFocusUpdateArgsSchema; exports.DailyFocusUpdateArgsSchema_default = DailyFocusUpdateArgsSchema_default;
//# sourceMappingURL=chunk-BZL6DBHW.cjs.map