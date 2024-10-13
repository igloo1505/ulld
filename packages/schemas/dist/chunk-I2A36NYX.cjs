"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkEA3YFH2Vcjs = require('./chunk-EA3YFH2V.cjs');


var _chunkA54UH2J5cjs = require('./chunk-A54UH2J5.cjs');


var _chunkK6DBHXTEcjs = require('./chunk-K6DBHXTE.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkTD2WYWGAcjs = require('./chunk-TD2WYWGA.cjs');


var _chunkOO7BVO2Hcjs = require('./chunk-OO7BVO2H.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/EquationUpdateInputSchema.ts
var _zod = require('zod');
var EquationUpdateInputSchema = _zod.z.object({
  equationId: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  desc: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  asPython: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  variableLegend: _zod.z.union([_zod.z.lazy(() => _chunkTD2WYWGAcjs.JsonNullValueInputSchema), _chunkOO7BVO2Hcjs.InputJsonValueSchema]).optional(),
  variables: _zod.z.union([_zod.z.lazy(() => _chunkA54UH2J5cjs.EquationUpdatevariablesInputSchema), _zod.z.string().array()]).optional(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunkK6DBHXTEcjs.EquationUpdatekeywordsInputSchema), _zod.z.string().array()]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  relatedValues: _zod.z.lazy(() => _chunkEA3YFH2Vcjs.RelatedValuesUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkF67HEIG4cjs.TagUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkF67HEIG4cjs.TopicUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunkF67HEIG4cjs.SubjectUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUpdateInputSchema_default = EquationUpdateInputSchema;




exports.EquationUpdateInputSchema = EquationUpdateInputSchema; exports.EquationUpdateInputSchema_default = EquationUpdateInputSchema_default;
//# sourceMappingURL=chunk-I2A36NYX.cjs.map