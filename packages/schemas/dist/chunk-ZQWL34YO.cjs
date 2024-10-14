"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC2CYLVJMcjs = require('./chunk-C2CYLVJM.cjs');


var _chunkT67QX5PGcjs = require('./chunk-T67QX5PG.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk46TJSZ52cjs = require('./chunk-46TJSZ52.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateInputSchema = _zod.z.object({
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  summary: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  overall: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  skin: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  bloat: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  weight_feeling: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  fullness: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  weight: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  jawLine: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  joints: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  flexibility: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  anxiety: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  mood: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sexDrive: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  glutenIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sugarIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  artificalDyes: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sleepQuality: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  hydration: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  twitching: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT67QX5PGcjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  sleepHours: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunk46TJSZ52cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  created: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  currentDiet: _zod.z.lazy(() => _chunkC2CYLVJMcjs.DietUpdateOneWithoutHealthReportNestedInputSchema).optional()
}).strict();
var HealthReportUpdateInputSchema_default = HealthReportUpdateInputSchema;




exports.HealthReportUpdateInputSchema = HealthReportUpdateInputSchema; exports.HealthReportUpdateInputSchema_default = HealthReportUpdateInputSchema_default;
//# sourceMappingURL=chunk-ZQWL34YO.cjs.map