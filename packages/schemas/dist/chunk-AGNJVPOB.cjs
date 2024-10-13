"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');

// src/database/outputTypeSchemas/NoteTypeDeleteArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeDeleteArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeDeleteArgsSchema_default = NoteTypeDeleteArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeDeleteArgsSchema = NoteTypeDeleteArgsSchema; exports.NoteTypeDeleteArgsSchema_default = NoteTypeDeleteArgsSchema_default;
//# sourceMappingURL=chunk-AGNJVPOB.cjs.map