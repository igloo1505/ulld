"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/QAPairUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var QAPairUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  question: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUncheckedUpdateManyWithoutQAPairNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUncheckedUpdateManyWithoutQaPairNestedInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkF67HEIG4cjs.PracticeExamUncheckedUpdateManyWithoutQuestionsNestedInputSchema).optional()
}).strict();
var QAPairUncheckedUpdateInputSchema_default = QAPairUncheckedUpdateInputSchema;




exports.QAPairUncheckedUpdateInputSchema = QAPairUncheckedUpdateInputSchema; exports.QAPairUncheckedUpdateInputSchema_default = QAPairUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-KHI7IBXB.cjs.map