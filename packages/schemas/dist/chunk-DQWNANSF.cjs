"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOLUAHAVRcjs = require('./chunk-OLUAHAVR.cjs');


var _chunk4GJEJXOBcjs = require('./chunk-4GJEJXOB.cjs');


var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');


var _chunkOLN5KQBLcjs = require('./chunk-OLN5KQBL.cjs');

// src/database/outputTypeSchemas/NoteTypeFindFirstArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeFindFirstArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOLUAHAVRcjs.NoteTypeOrderByWithRelationInputSchema.array(), _chunkOLUAHAVRcjs.NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk4GJEJXOBcjs.NoteTypeScalarFieldEnumSchema, _chunk4GJEJXOBcjs.NoteTypeScalarFieldEnumSchema.array()]).optional()
}).strict();
var NoteTypeFindFirstArgsSchema_default = NoteTypeFindFirstArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeFindFirstArgsSchema = NoteTypeFindFirstArgsSchema; exports.NoteTypeFindFirstArgsSchema_default = NoteTypeFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-DQWNANSF.cjs.map