"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKLKNQNVScjs = require('./chunk-KLKNQNVS.cjs');


var _chunkHCHIQX7Vcjs = require('./chunk-HCHIQX7V.cjs');


var _chunkNIIQUTVPcjs = require('./chunk-NIIQUTVP.cjs');


var _chunkUFIPCYPZcjs = require('./chunk-UFIPCYPZ.cjs');


var _chunkC6GGOV5Jcjs = require('./chunk-C6GGOV5J.cjs');

// src/database/outputTypeSchemas/DailyFocusUpsertArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusUpsertArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkC6GGOV5Jcjs.DailyFocusWhereUniqueInputSchema,
  create: _zod.z.union([_chunkKLKNQNVScjs.DailyFocusCreateInputSchema, _chunkHCHIQX7Vcjs.DailyFocusUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkNIIQUTVPcjs.DailyFocusUpdateInputSchema, _chunkUFIPCYPZcjs.DailyFocusUncheckedUpdateInputSchema])
}).strict();
var DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusUpsertArgsSchema = DailyFocusUpsertArgsSchema; exports.DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema_default;
//# sourceMappingURL=chunk-6WYXNKIL.cjs.map