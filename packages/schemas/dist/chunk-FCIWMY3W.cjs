"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTHYXNPHNcjs = require('./chunk-THYXNPHN.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateManyArgsSchema.ts
var _zod = require('zod');
var NoteTypeCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTHYXNPHNcjs.NoteTypeCreateManyInputSchema, _chunkTHYXNPHNcjs.NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateManyArgsSchema_default = NoteTypeCreateManyArgsSchema;




exports.NoteTypeCreateManyArgsSchema = NoteTypeCreateManyArgsSchema; exports.NoteTypeCreateManyArgsSchema_default = NoteTypeCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-FCIWMY3W.cjs.map