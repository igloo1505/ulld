"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/NoteTypeUpdateInputSchema.ts
var _zod = require('zod');
var NoteTypeUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var NoteTypeUpdateInputSchema_default = NoteTypeUpdateInputSchema;




exports.NoteTypeUpdateInputSchema = NoteTypeUpdateInputSchema; exports.NoteTypeUpdateInputSchema_default = NoteTypeUpdateInputSchema_default;
//# sourceMappingURL=chunk-4OVQXTFU.cjs.map