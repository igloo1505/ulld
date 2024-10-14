"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTHYXNPHNcjs = require('./chunk-THYXNPHN.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var NoteTypeCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTHYXNPHNcjs.NoteTypeCreateManyInputSchema, _chunkTHYXNPHNcjs.NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateManyAndReturnArgsSchema_default = NoteTypeCreateManyAndReturnArgsSchema;




exports.NoteTypeCreateManyAndReturnArgsSchema = NoteTypeCreateManyAndReturnArgsSchema; exports.NoteTypeCreateManyAndReturnArgsSchema_default = NoteTypeCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-EUX2B5O4.cjs.map