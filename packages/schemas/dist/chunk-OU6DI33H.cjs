"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/HealthReportMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var HealthReportMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  overall: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  skin: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bloat: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weight_feeling: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fullness: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weight: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cardiacCapacity: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  jawLine: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  joints: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  flexibility: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  anxiety: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  anxiety_desc: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mood_desc: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  mood: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sexDrive: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  intruisiveThoughts: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  caffeineIntake: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glutenIntake: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sugarIntake: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  artificialSweetenerIntake: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  artificalDyes: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sleepQuality: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  hydration: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  twitching: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sleepHours: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  calorie_est: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  times_meals_more_than_gap_apart: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  estHoursInExcessFast: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var HealthReportMinOrderByAggregateInputSchema_default = HealthReportMinOrderByAggregateInputSchema;




exports.HealthReportMinOrderByAggregateInputSchema = HealthReportMinOrderByAggregateInputSchema; exports.HealthReportMinOrderByAggregateInputSchema_default = HealthReportMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OU6DI33H.cjs.map