"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLKMI7ZHYcjs = require('./chunk-LKMI7ZHY.cjs');


var _chunk5MHLGRUAcjs = require('./chunk-5MHLGRUA.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByWithRelationInputSchema = _zod.z.object({
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
  currentDiet: _zod.z.lazy(() => _chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkLKMI7ZHYcjs.HealthReportOrderByRelevanceInputSchema).optional()
}).strict();
var HealthReportOrderByWithRelationInputSchema_default = HealthReportOrderByWithRelationInputSchema;




exports.HealthReportOrderByWithRelationInputSchema = HealthReportOrderByWithRelationInputSchema; exports.HealthReportOrderByWithRelationInputSchema_default = HealthReportOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-ZLE6H6QC.cjs.map