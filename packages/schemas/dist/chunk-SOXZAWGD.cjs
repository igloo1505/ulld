"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateManyWithoutTagsInputSchema.ts
var _zod = require('zod');
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  date: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema;




exports.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema; exports.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-SOXZAWGD.cjs.map