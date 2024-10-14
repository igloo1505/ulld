"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDXQGOMEQcjs = require('./chunk-DXQGOMEQ.cjs');


var _chunk72O2APQ6cjs = require('./chunk-72O2APQ6.cjs');


var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');


var _chunk7QDGTUEQcjs = require('./chunk-7QDGTUEQ.cjs');

// src/database/outputTypeSchemas/NoteTypeFindFirstArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeFindFirstArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkDXQGOMEQcjs.NoteTypeOrderByWithRelationInputSchema.array(), _chunkDXQGOMEQcjs.NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk72O2APQ6cjs.NoteTypeScalarFieldEnumSchema, _chunk72O2APQ6cjs.NoteTypeScalarFieldEnumSchema.array()]).optional()
}).strict();
var NoteTypeFindFirstArgsSchema_default = NoteTypeFindFirstArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeFindFirstArgsSchema = NoteTypeFindFirstArgsSchema; exports.NoteTypeFindFirstArgsSchema_default = NoteTypeFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-KHKVE6BL.cjs.map