"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkXW2F7273cjs = require('./chunk-XW2F7273.cjs');


var _chunkYR6ECLZIcjs = require('./chunk-YR6ECLZI.cjs');


var _chunkL7A3CUH6cjs = require('./chunk-L7A3CUH6.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/EquationUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var EquationUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  equationId: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  asPython: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkZI4N5EPRcjs.JsonNullValueInputSchema), _chunkCPSW4INCcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunkYR6ECLZIcjs.EquationUpdatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkL7A3CUH6cjs.EquationUpdatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  relatedValues: _zod.z.lazy(() => _chunkXW2F7273cjs.RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUncheckedUpdateInputSchema_default = EquationUncheckedUpdateInputSchema;




exports.EquationUncheckedUpdateInputSchema = EquationUncheckedUpdateInputSchema; exports.EquationUncheckedUpdateInputSchema_default = EquationUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-DDDRQM5T.cjs.map