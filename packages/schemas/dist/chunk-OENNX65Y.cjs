"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/HealthReportUncheckedCreateInputSchema.ts
var _zod = require('zod');
var HealthReportUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  title: _zod.z.string().optional().nullable(),
  summary: _zod.z.string().optional().nullable(),
  overall: _zod.z.number().optional(),
  skin: _zod.z.number().optional(),
  bloat: _zod.z.number().optional(),
  weight_feeling: _zod.z.number().optional(),
  fullness: _zod.z.number().optional(),
  weight: _zod.z.number().optional().nullable(),
  cardiacCapacity: _zod.z.number().optional(),
  jawLine: _zod.z.number().optional(),
  joints: _zod.z.number().optional(),
  flexibility: _zod.z.number().optional(),
  anxiety: _zod.z.number().optional(),
  anxiety_desc: _zod.z.string().optional().nullable(),
  mood_desc: _zod.z.string().optional().nullable(),
  mood: _zod.z.number().optional(),
  sexDrive: _zod.z.number().optional(),
  intruisiveThoughts: _zod.z.number().optional(),
  caffeineIntake: _zod.z.number().optional(),
  glutenIntake: _zod.z.number().optional(),
  sugarIntake: _zod.z.number().optional(),
  artificialSweetenerIntake: _zod.z.number().optional(),
  artificalDyes: _zod.z.number().optional(),
  sleepQuality: _zod.z.number().optional(),
  hydration: _zod.z.number().optional(),
  twitching: _zod.z.number().optional(),
  sleepHours: _zod.z.number().optional().nullable(),
  calorie_est: _zod.z.number().int().optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.number().int().optional().nullable(),
  estHoursInExcessFast: _zod.z.number().optional().nullable(),
  dietId: _zod.z.string().optional().nullable(),
  created: _zod.z.coerce.date().optional()
}).strict();
var HealthReportUncheckedCreateInputSchema_default = HealthReportUncheckedCreateInputSchema;




exports.HealthReportUncheckedCreateInputSchema = HealthReportUncheckedCreateInputSchema; exports.HealthReportUncheckedCreateInputSchema_default = HealthReportUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-OENNX65Y.cjs.map