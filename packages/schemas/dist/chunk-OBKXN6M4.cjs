"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXJJAGWE5cjs = require('./chunk-XJJAGWE5.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateManyArgsSchema.ts
var _zod = require('zod');
var NoteTypeCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkXJJAGWE5cjs.NoteTypeCreateManyInputSchema, _chunkXJJAGWE5cjs.NoteTypeCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateManyArgsSchema_default = NoteTypeCreateManyArgsSchema;




exports.NoteTypeCreateManyArgsSchema = NoteTypeCreateManyArgsSchema; exports.NoteTypeCreateManyArgsSchema_default = NoteTypeCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-OBKXN6M4.cjs.map