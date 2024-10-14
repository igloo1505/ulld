"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');


var _chunkIX7LNI3Gcjs = require('./chunk-IX7LNI3G.cjs');


var _chunkFTLKOFHAcjs = require('./chunk-FTLKOFHA.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/DietWhereUniqueInputSchema.ts
var _zod = require('zod');
var DietWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).array()]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  vegan: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  pescatarian: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  vegetarian: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  goals: _zod.z.lazy(() => _chunkIX7LNI3Gcjs.EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  items: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietaryItemListRelationFilterSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunkZGGHUMG7cjs.TimePeriodListRelationFilterSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportListRelationFilterSchema).optional()
}).strict());
var DietWhereUniqueInputSchema_default = DietWhereUniqueInputSchema;




exports.DietWhereUniqueInputSchema = DietWhereUniqueInputSchema; exports.DietWhereUniqueInputSchema_default = DietWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-ELJLHOYB.cjs.map