"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');

// src/database/outputTypeSchemas/NoteTypeDeleteArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeDeleteArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeDeleteArgsSchema_default = NoteTypeDeleteArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeDeleteArgsSchema = NoteTypeDeleteArgsSchema; exports.NoteTypeDeleteArgsSchema_default = NoteTypeDeleteArgsSchema_default;
//# sourceMappingURL=chunk-2OJEUSU7.cjs.map