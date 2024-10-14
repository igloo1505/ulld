"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');

// src/database/outputTypeSchemas/NoteTypeFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeFindUniqueOrThrowArgsSchema_default = NoteTypeFindUniqueOrThrowArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeFindUniqueOrThrowArgsSchema = NoteTypeFindUniqueOrThrowArgsSchema; exports.NoteTypeFindUniqueOrThrowArgsSchema_default = NoteTypeFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-2N6IBDSE.cjs.map