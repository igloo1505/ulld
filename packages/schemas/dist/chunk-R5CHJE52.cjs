"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6CLUJKIWcjs = require('./chunk-6CLUJKIW.cjs');


var _chunkOENNX65Ycjs = require('./chunk-OENNX65Y.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/HealthReportCreateArgsSchema.ts
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
  currentDiet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var HealthReportCreateArgsSchema = _zod.z.object({
  select: HealthReportSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.HealthReportIncludeSchema.optional(),
  data: _zod.z.union([_chunk6CLUJKIWcjs.HealthReportCreateInputSchema, _chunkOENNX65Ycjs.HealthReportUncheckedCreateInputSchema]).optional()
}).strict();
var HealthReportCreateArgsSchema_default = HealthReportCreateArgsSchema;





exports.HealthReportSelectSchema = HealthReportSelectSchema; exports.HealthReportCreateArgsSchema = HealthReportCreateArgsSchema; exports.HealthReportCreateArgsSchema_default = HealthReportCreateArgsSchema_default;
//# sourceMappingURL=chunk-R5CHJE52.cjs.map