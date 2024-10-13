"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5OM742D4cjs = require('./chunk-5OM742D4.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateManyMutationInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  overall: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  skin: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  bloat: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  weight_feeling: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  fullness: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  weight: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  jawLine: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  joints: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  flexibility: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  anxiety: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  mood: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sexDrive: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  glutenIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sugarIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  artificalDyes: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sleepQuality: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  hydration: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  twitching: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sleepHours: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  created: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var HealthReportUpdateManyMutationInputSchema_default = HealthReportUpdateManyMutationInputSchema;




exports.HealthReportUpdateManyMutationInputSchema = HealthReportUpdateManyMutationInputSchema; exports.HealthReportUpdateManyMutationInputSchema_default = HealthReportUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-R6KSQQWN.cjs.map