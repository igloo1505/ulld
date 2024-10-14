"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/QAPairUncheckedUpdateManyWithoutTagsInputSchema.ts
var _zod = require('zod');
var QAPairUncheckedUpdateManyWithoutTagsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  question: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  description: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QAPairUncheckedUpdateManyWithoutTagsInputSchema_default = QAPairUncheckedUpdateManyWithoutTagsInputSchema;




exports.QAPairUncheckedUpdateManyWithoutTagsInputSchema = QAPairUncheckedUpdateManyWithoutTagsInputSchema; exports.QAPairUncheckedUpdateManyWithoutTagsInputSchema_default = QAPairUncheckedUpdateManyWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-6I6UTZ7X.cjs.map