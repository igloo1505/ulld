"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCDOLQBWNcjs = require('./chunk-CDOLQBWN.cjs');

// src/database/outputTypeSchemas/MdxNoteCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var MdxNoteCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCDOLQBWNcjs.MdxNoteCreateManyInputSchema, _chunkCDOLQBWNcjs.MdxNoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var MdxNoteCreateManyAndReturnArgsSchema_default = MdxNoteCreateManyAndReturnArgsSchema;




exports.MdxNoteCreateManyAndReturnArgsSchema = MdxNoteCreateManyAndReturnArgsSchema; exports.MdxNoteCreateManyAndReturnArgsSchema_default = MdxNoteCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-SJTISQAU.cjs.map