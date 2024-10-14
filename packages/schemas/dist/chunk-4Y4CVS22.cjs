"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCWQF73HScjs = require('./chunk-CWQF73HS.cjs');


var _chunkHHR6Z4QKcjs = require('./chunk-HHR6Z4QK.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/DefinitionUpdateInputSchema.ts
var _zod = require('zod');
var DefinitionUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHHR6Z4QKcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mdxNote: _zod.z.lazy(() => _chunkCWQF73HScjs.MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema).optional()
}).strict();
var DefinitionUpdateInputSchema_default = DefinitionUpdateInputSchema;




exports.DefinitionUpdateInputSchema = DefinitionUpdateInputSchema; exports.DefinitionUpdateInputSchema_default = DefinitionUpdateInputSchema_default;
//# sourceMappingURL=chunk-4Y4CVS22.cjs.map