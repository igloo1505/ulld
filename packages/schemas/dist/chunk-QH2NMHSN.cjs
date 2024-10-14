"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/NoteTypeUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var NoteTypeUpdateManyMutationInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUpdateManyMutationInputSchema_default = NoteTypeUpdateManyMutationInputSchema;




exports.NoteTypeUpdateManyMutationInputSchema = NoteTypeUpdateManyMutationInputSchema; exports.NoteTypeUpdateManyMutationInputSchema_default = NoteTypeUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-QH2NMHSN.cjs.map