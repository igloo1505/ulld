"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');

// src/database/inputTypeSchemas/PracticeExamUpdateInputSchema.ts
var _zod = require('zod');
var PracticeExamUpdateInputSchema = _zod.z.object({
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  date: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUpdateManyWithoutPracticeExamNestedInputSchema).optional(),
  questions: _zod.z.lazy(() => _chunkF67HEIG4cjs.QAPairUpdateManyWithoutPracticeExamNestedInputSchema).optional()
}).strict();
var PracticeExamUpdateInputSchema_default = PracticeExamUpdateInputSchema;




exports.PracticeExamUpdateInputSchema = PracticeExamUpdateInputSchema; exports.PracticeExamUpdateInputSchema_default = PracticeExamUpdateInputSchema_default;
//# sourceMappingURL=chunk-AZ2F5JPQ.cjs.map