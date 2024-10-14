"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDZMYDVTOcjs = require('./chunk-DZMYDVTO.cjs');


var _chunkFSPKHZ3Xcjs = require('./chunk-FSPKHZ3X.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkHE3TXQGOcjs = require('./chunk-HE3TXQGO.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');

// src/database/inputTypeSchemas/HealthReportScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var HealthReportScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => HealthReportScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  overall: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  skin: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  bloat: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  weight_feeling: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  fullness: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  jawLine: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  joints: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  flexibility: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  anxiety: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  mood: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sexDrive: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  glutenIntake: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sugarIntake: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  artificalDyes: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sleepQuality: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  hydration: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  twitching: _zod.z.union([_zod.z.lazy(() => _chunkDZMYDVTOcjs.FloatWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunkHE3TXQGOcjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunkFSPKHZ3Xcjs.FloatNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var HealthReportScalarWhereWithAggregatesInputSchema_default = HealthReportScalarWhereWithAggregatesInputSchema;




exports.HealthReportScalarWhereWithAggregatesInputSchema = HealthReportScalarWhereWithAggregatesInputSchema; exports.HealthReportScalarWhereWithAggregatesInputSchema_default = HealthReportScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-N4EZ2XK7.cjs.map