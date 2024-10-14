"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/PracticeExamUncheckedUpdateManyWithoutTagsInputSchema.ts
var _zod = require('zod');
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  date: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema;




exports.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema; exports.PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default = PracticeExamUncheckedUpdateManyWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-5FEYY4HD.cjs.map