"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkGWYFZN57cjs = require('./chunk-GWYFZN57.cjs');


var _chunkYR6ECLZIcjs = require('./chunk-YR6ECLZI.cjs');


var _chunkL7A3CUH6cjs = require('./chunk-L7A3CUH6.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunkZI4N5EPRcjs = require('./chunk-ZI4N5EPR.cjs');


var _chunkCPSW4INCcjs = require('./chunk-CPSW4INC.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/EquationUpdateInputSchema.ts
var _zod = require('zod');
var EquationUpdateInputSchema = _zod.z.object({
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
  relatedValues: _zod.z.lazy(() => _chunkGWYFZN57cjs.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunk642YCHOVcjs.TagUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunk642YCHOVcjs.TopicUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk642YCHOVcjs.SubjectUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUpdateInputSchema_default = EquationUpdateInputSchema;




exports.EquationUpdateInputSchema = EquationUpdateInputSchema; exports.EquationUpdateInputSchema_default = EquationUpdateInputSchema_default;
//# sourceMappingURL=chunk-ESV6SSCJ.cjs.map