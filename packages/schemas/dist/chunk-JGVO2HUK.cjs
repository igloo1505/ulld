"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6P5MLLVVcjs = require('./chunk-6P5MLLVV.cjs');


var _chunk45XDWHE4cjs = require('./chunk-45XDWHE4.cjs');


var _chunkOU6DI33Hcjs = require('./chunk-OU6DI33H.cjs');


var _chunkHS5IITA6cjs = require('./chunk-HS5IITA6.cjs');


var _chunkSN3DHLY2cjs = require('./chunk-SN3DHLY2.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  overall: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  skin: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bloat: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weight_feeling: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fullness: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  cardiacCapacity: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  jawLine: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  joints: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  flexibility: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  anxiety: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
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
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  created: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk45XDWHE4cjs.HealthReportCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk6P5MLLVVcjs.HealthReportAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHS5IITA6cjs.HealthReportMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOU6DI33Hcjs.HealthReportMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkSN3DHLY2cjs.HealthReportSumOrderByAggregateInputSchema).optional()
}).strict();
var HealthReportOrderByWithAggregationInputSchema_default = HealthReportOrderByWithAggregationInputSchema;




exports.HealthReportOrderByWithAggregationInputSchema = HealthReportOrderByWithAggregationInputSchema; exports.HealthReportOrderByWithAggregationInputSchema_default = HealthReportOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-JGVO2HUK.cjs.map