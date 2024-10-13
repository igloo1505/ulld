"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXXJ5A6Y6cjs = require('./chunk-XXJ5A6Y6.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateManyArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkXXJ5A6Y6cjs.SequentialNoteListCreateManyInputSchema, _chunkXXJ5A6Y6cjs.SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyArgsSchema_default = SequentialNoteListCreateManyArgsSchema;




exports.SequentialNoteListCreateManyArgsSchema = SequentialNoteListCreateManyArgsSchema; exports.SequentialNoteListCreateManyArgsSchema_default = SequentialNoteListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-KUVWSMEC.cjs.map