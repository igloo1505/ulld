"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFE23CYUYcjs = require('./chunk-FE23CYUY.cjs');


var _chunkHWKC7KYUcjs = require('./chunk-HWKC7KYU.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');

// src/database/inputTypeSchemas/HealthReportScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var HealthReportScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  overall: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  skin: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  bloat: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  weight_feeling: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  fullness: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  jawLine: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  joints: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  flexibility: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  anxiety: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  mood: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sexDrive: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  glutenIntake: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sugarIntake: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  artificalDyes: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sleepQuality: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  hydration: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  twitching: _zod.z.union([_zod.z.lazy(() => _chunkFE23CYUYcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunkHWKC7KYUcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  created: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var HealthReportScalarWhereWithAggregatesInputSchema_default = HealthReportScalarWhereWithAggregatesInputSchema;




exports.HealthReportScalarWhereWithAggregatesInputSchema = HealthReportScalarWhereWithAggregatesInputSchema; exports.HealthReportScalarWhereWithAggregatesInputSchema_default = HealthReportScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-ZAB4PI5M.cjs.map