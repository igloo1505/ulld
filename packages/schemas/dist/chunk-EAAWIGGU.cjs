"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXXJ5A6Y6cjs = require('./chunk-XXJ5A6Y6.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkXXJ5A6Y6cjs.SequentialNoteListCreateManyInputSchema, _chunkXXJ5A6Y6cjs.SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyAndReturnArgsSchema_default = SequentialNoteListCreateManyAndReturnArgsSchema;




exports.SequentialNoteListCreateManyAndReturnArgsSchema = SequentialNoteListCreateManyAndReturnArgsSchema; exports.SequentialNoteListCreateManyAndReturnArgsSchema_default = SequentialNoteListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-EAAWIGGU.cjs.map