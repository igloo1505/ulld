"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');


var _chunkGQ2HA4TXcjs = require('./chunk-GQ2HA4TX.cjs');


var _chunk7OHHSSMZcjs = require('./chunk-7OHHSSMZ.cjs');


var _chunk2WZ4XBN7cjs = require('./chunk-2WZ4XBN7.cjs');


var _chunkWQNXU6XAcjs = require('./chunk-WQNXU6XA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/HealthReportWhereUniqueInputSchema.ts
var _zod = require('zod');
var HealthReportWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportWhereInputSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.HealthReportWhereInputSchema).array()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  overall: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  skin: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  bloat: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight_feeling: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  fullness: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  jawLine: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  joints: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  flexibility: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sexDrive: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  glutenIntake: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sugarIntake: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificalDyes: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepQuality: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  hydration: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  twitching: _zod.z.union([_zod.z.lazy(() => _chunkGQ2HA4TXcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunk2WZ4XBN7cjs.IntNullableFilterSchema), _zod.z.number().int()]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunk7OHHSSMZcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkWQNXU6XAcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  created: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  currentDiet: _zod.z.union([_zod.z.lazy(() => _chunk4QJOIHDOcjs.DietNullableRelationFilterSchema), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional().nullable()
}).strict());
var HealthReportWhereUniqueInputSchema_default = HealthReportWhereUniqueInputSchema;




exports.HealthReportWhereUniqueInputSchema = HealthReportWhereUniqueInputSchema; exports.HealthReportWhereUniqueInputSchema_default = HealthReportWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-3ZQVKIXX.cjs.map