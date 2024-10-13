"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema.ts
var _zod = require('zod');
var QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  question: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema_default = QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema;




exports.QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema = QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema; exports.QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema_default = QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema_default;
//# sourceMappingURL=chunk-V34JJPFL.cjs.map