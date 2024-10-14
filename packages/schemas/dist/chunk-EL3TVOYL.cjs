"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateInputSchema = _zod.z.object({
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  date: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunk642YCHOVcjs.QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
var PracticeExamUpdateInputSchema_default = PracticeExamUpdateInputSchema;




exports.PracticeExamUpdateInputSchema = PracticeExamUpdateInputSchema; exports.PracticeExamUpdateInputSchema_default = PracticeExamUpdateInputSchema_default;
//# sourceMappingURL=chunk-EL3TVOYL.cjs.map