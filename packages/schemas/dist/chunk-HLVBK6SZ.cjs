"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT4VKUO56cjs = require('./chunk-T4VKUO56.cjs');


var _chunkLN4IZVXHcjs = require('./chunk-LN4IZVXH.cjs');


var _chunk725ECGCFcjs = require('./chunk-725ECGCF.cjs');


var _chunkSIKRB52Xcjs = require('./chunk-SIKRB52X.cjs');


var _chunkVID74IWQcjs = require('./chunk-VID74IWQ.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByWithAggregationInputSchema = _zod.z.object({
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
  _count: _zod.z.lazy(() => _chunkLN4IZVXHcjs.HealthReportCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkT4VKUO56cjs.HealthReportAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkSIKRB52Xcjs.HealthReportMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk725ECGCFcjs.HealthReportMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkVID74IWQcjs.HealthReportSumOrderByAggregateInputSchema).optional()
}).strict();
var HealthReportOrderByWithAggregationInputSchema_default = HealthReportOrderByWithAggregationInputSchema;




exports.HealthReportOrderByWithAggregationInputSchema = HealthReportOrderByWithAggregationInputSchema; exports.HealthReportOrderByWithAggregationInputSchema_default = HealthReportOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-HLVBK6SZ.cjs.map