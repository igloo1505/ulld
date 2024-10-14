"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkANCCV4ARcjs = require('./chunk-ANCCV4AR.cjs');


var _chunkRO2FGWOJcjs = require('./chunk-RO2FGWOJ.cjs');


var _chunkS3KRP6KKcjs = require('./chunk-S3KRP6KK.cjs');


var _chunkXIW7HTFDcjs = require('./chunk-XIW7HTFD.cjs');


var _chunkCUJGY6WBcjs = require('./chunk-CUJGY6WB.cjs');

// src/database/outputTypeSchemas/DailyFocusUpsertArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusUpsertArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  where: _chunkCUJGY6WBcjs.DailyFocusWhereUniqueInputSchema,
  create: _zod.z.union([_chunkANCCV4ARcjs.DailyFocusCreateInputSchema, _chunkRO2FGWOJcjs.DailyFocusUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkS3KRP6KKcjs.DailyFocusUpdateInputSchema, _chunkXIW7HTFDcjs.DailyFocusUncheckedUpdateInputSchema])
}).strict();
var DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusUpsertArgsSchema = DailyFocusUpsertArgsSchema; exports.DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema_default;
//# sourceMappingURL=chunk-QGYHLLGA.cjs.map