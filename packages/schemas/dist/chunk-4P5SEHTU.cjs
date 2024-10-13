"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBWZZQA2Bcjs = require('./chunk-BWZZQA2B.cjs');

// src/database/outputTypeSchemas/MdxNoteCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var MdxNoteCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkBWZZQA2Bcjs.MdxNoteCreateManyInputSchema, _chunkBWZZQA2Bcjs.MdxNoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var MdxNoteCreateManyAndReturnArgsSchema_default = MdxNoteCreateManyAndReturnArgsSchema;




exports.MdxNoteCreateManyAndReturnArgsSchema = MdxNoteCreateManyAndReturnArgsSchema; exports.MdxNoteCreateManyAndReturnArgsSchema_default = MdxNoteCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-4P5SEHTU.cjs.map