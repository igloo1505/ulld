"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');

// src/database/outputTypeSchemas/NoteTypeFindUniqueArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeFindUniqueArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeFindUniqueArgsSchema_default = NoteTypeFindUniqueArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeFindUniqueArgsSchema = NoteTypeFindUniqueArgsSchema; exports.NoteTypeFindUniqueArgsSchema_default = NoteTypeFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-KLJNCC2J.cjs.map