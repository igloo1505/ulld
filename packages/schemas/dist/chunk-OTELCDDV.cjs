"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/HealthReportWhereUniqueInputSchema.ts
var _zod = require('zod');
var HealthReportWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportWhereInputSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.HealthReportWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  overall: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  skin: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  bloat: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight_feeling: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  fullness: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  jawLine: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  joints: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  flexibility: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sexDrive: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  glutenIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sugarIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificalDyes: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepQuality: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  hydration: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  twitching: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  currentDiet: _zod.z.union([_zod.z.lazy(() => _chunkZGGHUMG7cjs.DietNullableRelationFilterSchema), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional().nullable()
}).strict());
var HealthReportWhereUniqueInputSchema_default = HealthReportWhereUniqueInputSchema;




exports.HealthReportWhereUniqueInputSchema = HealthReportWhereUniqueInputSchema; exports.HealthReportWhereUniqueInputSchema_default = HealthReportWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-OTELCDDV.cjs.map