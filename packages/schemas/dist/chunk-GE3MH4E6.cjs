"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkG3GSQGN6cjs = require('./chunk-G3GSQGN6.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');


var _chunkDGG7BHZVcjs = require('./chunk-DGG7BHZV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/HealthReportFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var HealthReportSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  summary: _zod.z.boolean().optional(),
  overall: _zod.z.boolean().optional(),
  skin: _zod.z.boolean().optional(),
  bloat: _zod.z.boolean().optional(),
  weight_feeling: _zod.z.boolean().optional(),
  fullness: _zod.z.boolean().optional(),
  weight: _zod.z.boolean().optional(),
  cardiacCapacity: _zod.z.boolean().optional(),
  jawLine: _zod.z.boolean().optional(),
  joints: _zod.z.boolean().optional(),
  flexibility: _zod.z.boolean().optional(),
  anxiety: _zod.z.boolean().optional(),
  anxiety_desc: _zod.z.boolean().optional(),
  mood_desc: _zod.z.boolean().optional(),
  mood: _zod.z.boolean().optional(),
  sexDrive: _zod.z.boolean().optional(),
  intruisiveThoughts: _zod.z.boolean().optional(),
  caffeineIntake: _zod.z.boolean().optional(),
  glutenIntake: _zod.z.boolean().optional(),
  sugarIntake: _zod.z.boolean().optional(),
  artificialSweetenerIntake: _zod.z.boolean().optional(),
  artificalDyes: _zod.z.boolean().optional(),
  sleepQuality: _zod.z.boolean().optional(),
  hydration: _zod.z.boolean().optional(),
  twitching: _zod.z.boolean().optional(),
  sleepHours: _zod.z.boolean().optional(),
  calorie_est: _zod.z.boolean().optional(),
  times_meals_more_than_gap_apart: _zod.z.boolean().optional(),
  estHoursInExcessFast: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  created: _zod.z.boolean().optional(),
  currentDiet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var HealthReportFindFirstOrThrowArgsSchema = _zod.z.object({
  select: HealthReportSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.HealthReportIncludeSchema.optional(),
  where: _chunkZGGHUMG7cjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkG3GSQGN6cjs.HealthReportOrderByWithRelationInputSchema.array(), _chunkG3GSQGN6cjs.HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkDGG7BHZVcjs.HealthReportScalarFieldEnumSchema, _chunkDGG7BHZVcjs.HealthReportScalarFieldEnumSchema.array()]).optional()
}).strict();
var HealthReportFindFirstOrThrowArgsSchema_default = HealthReportFindFirstOrThrowArgsSchema;





exports.HealthReportSelectSchema = HealthReportSelectSchema; exports.HealthReportFindFirstOrThrowArgsSchema = HealthReportFindFirstOrThrowArgsSchema; exports.HealthReportFindFirstOrThrowArgsSchema_default = HealthReportFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-GE3MH4E6.cjs.map