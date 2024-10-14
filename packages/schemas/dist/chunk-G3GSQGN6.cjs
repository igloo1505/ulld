"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFIB5DVTZcjs = require('./chunk-FIB5DVTZ.cjs');


var _chunk7CPS7QVLcjs = require('./chunk-7CPS7QVL.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  overall: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  skin: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bloat: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  weight_feeling: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fullness: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  cardiacCapacity: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  jawLine: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  joints: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  flexibility: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  anxiety: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  mood: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sexDrive: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  intruisiveThoughts: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  caffeineIntake: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glutenIntake: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sugarIntake: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  artificialSweetenerIntake: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  artificalDyes: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sleepQuality: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  hydration: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  twitching: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  created: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  currentDiet: _zod.z.lazy(() => _chunk7CPS7QVLcjs.DietOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkFIB5DVTZcjs.HealthReportOrderByRelevanceInputSchema).optional()
}).strict();
var HealthReportOrderByWithRelationInputSchema_default = HealthReportOrderByWithRelationInputSchema;




exports.HealthReportOrderByWithRelationInputSchema = HealthReportOrderByWithRelationInputSchema; exports.HealthReportOrderByWithRelationInputSchema_default = HealthReportOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-G3GSQGN6.cjs.map