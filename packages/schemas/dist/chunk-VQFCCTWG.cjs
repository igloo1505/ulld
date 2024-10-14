"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/NoteTypeUpdateInputSchema.ts
var _zod = require('zod');
var NoteTypeUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUpdateInputSchema_default = NoteTypeUpdateInputSchema;




exports.NoteTypeUpdateInputSchema = NoteTypeUpdateInputSchema; exports.NoteTypeUpdateInputSchema_default = NoteTypeUpdateInputSchema_default;
//# sourceMappingURL=chunk-VQFCCTWG.cjs.map