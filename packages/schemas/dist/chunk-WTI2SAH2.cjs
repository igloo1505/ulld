"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5LWV7VG4cjs = require('./chunk-5LWV7VG4.cjs');


var _chunkMXOZSIRRcjs = require('./chunk-MXOZSIRR.cjs');


var _chunkZQWL34YOcjs = require('./chunk-ZQWL34YO.cjs');


var _chunk2CC2WFFVcjs = require('./chunk-2CC2WFFV.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/outputTypeSchemas/HealthReportUpsertArgsSchema.ts
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
var HealthReportUpsertArgsSchema = _zod.z.object({
  select: HealthReportSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.HealthReportIncludeSchema.optional(),
  where: _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema,
  create: _zod.z.union([_chunk5LWV7VG4cjs.HealthReportCreateInputSchema, _chunkMXOZSIRRcjs.HealthReportUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkZQWL34YOcjs.HealthReportUpdateInputSchema, _chunk2CC2WFFVcjs.HealthReportUncheckedUpdateInputSchema])
}).strict();
var HealthReportUpsertArgsSchema_default = HealthReportUpsertArgsSchema;





exports.HealthReportSelectSchema = HealthReportSelectSchema; exports.HealthReportUpsertArgsSchema = HealthReportUpsertArgsSchema; exports.HealthReportUpsertArgsSchema_default = HealthReportUpsertArgsSchema_default;
//# sourceMappingURL=chunk-WTI2SAH2.cjs.map