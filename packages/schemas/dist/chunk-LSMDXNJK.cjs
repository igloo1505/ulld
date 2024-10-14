"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCDOLQBWNcjs = require('./chunk-CDOLQBWN.cjs');

// src/database/outputTypeSchemas/MdxNoteCreateManyArgsSchema.ts
var _zod = require('zod');
var MdxNoteCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCDOLQBWNcjs.MdxNoteCreateManyInputSchema, _chunkCDOLQBWNcjs.MdxNoteCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var MdxNoteCreateManyArgsSchema_default = MdxNoteCreateManyArgsSchema;




exports.MdxNoteCreateManyArgsSchema = MdxNoteCreateManyArgsSchema; exports.MdxNoteCreateManyArgsSchema_default = MdxNoteCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-LSMDXNJK.cjs.map