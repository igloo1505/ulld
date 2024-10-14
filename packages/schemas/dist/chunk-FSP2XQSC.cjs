"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');


var _chunk54BATBBKcjs = require('./chunk-54BATBBK.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/TimePeriodWhereUniqueInputSchema.ts
var _zod = require('zod');
var TimePeriodWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodWhereInputSchema).array()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  Diet: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietNullableRelationFilterSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional().nullable()
}).strict());
var TimePeriodWhereUniqueInputSchema_default = TimePeriodWhereUniqueInputSchema;




exports.TimePeriodWhereUniqueInputSchema = TimePeriodWhereUniqueInputSchema; exports.TimePeriodWhereUniqueInputSchema_default = TimePeriodWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-FSP2XQSC.cjs.map