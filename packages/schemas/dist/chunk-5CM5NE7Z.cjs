"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');

// src/database/outputTypeSchemas/NoteTypeFindUniqueArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeFindUniqueArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeFindUniqueArgsSchema_default = NoteTypeFindUniqueArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeFindUniqueArgsSchema = NoteTypeFindUniqueArgsSchema; exports.NoteTypeFindUniqueArgsSchema_default = NoteTypeFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-5CM5NE7Z.cjs.map