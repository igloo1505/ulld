"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkM2TDEEYKcjs = require('./chunk-M2TDEEYK.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');


var _chunk37OY2UWRcjs = require('./chunk-37OY2UWR.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/TimePeriodFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindFirstOrThrowArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.TimePeriodIncludeSchema.optional(),
  where: _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkM2TDEEYKcjs.TimePeriodOrderByWithRelationInputSchema.array(), _chunkM2TDEEYKcjs.TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk37OY2UWRcjs.TimePeriodScalarFieldEnumSchema, _chunk37OY2UWRcjs.TimePeriodScalarFieldEnumSchema.array()]).optional()
}).strict();
var TimePeriodFindFirstOrThrowArgsSchema_default = TimePeriodFindFirstOrThrowArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodFindFirstOrThrowArgsSchema = TimePeriodFindFirstOrThrowArgsSchema; exports.TimePeriodFindFirstOrThrowArgsSchema_default = TimePeriodFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-PF4TVRJK.cjs.map