"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXJJAGWE5cjs = require('./chunk-XJJAGWE5.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var NoteTypeCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkXJJAGWE5cjs.NoteTypeCreateManyInputSchema, _chunkXJJAGWE5cjs.NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateManyAndReturnArgsSchema_default = NoteTypeCreateManyAndReturnArgsSchema;




exports.NoteTypeCreateManyAndReturnArgsSchema = NoteTypeCreateManyAndReturnArgsSchema; exports.NoteTypeCreateManyAndReturnArgsSchema_default = NoteTypeCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-O5V5DUNZ.cjs.map