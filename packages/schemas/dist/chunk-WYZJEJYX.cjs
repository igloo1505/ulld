"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OWFNJS2cjs = require('./chunk-2OWFNJS2.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mdxNote: _zod.z.lazy(() => _chunk2OWFNJS2cjs.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema).optional()
}).strict();
var DefinitionUpdateInputSchema_default = DefinitionUpdateInputSchema;




exports.DefinitionUpdateInputSchema = DefinitionUpdateInputSchema; exports.DefinitionUpdateInputSchema_default = DefinitionUpdateInputSchema_default;
//# sourceMappingURL=chunk-WYZJEJYX.cjs.map