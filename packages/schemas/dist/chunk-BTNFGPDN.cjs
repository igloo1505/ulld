"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVUEUEYKYcjs = require('./chunk-VUEUEYKY.cjs');


var _chunkUEIVAZVOcjs = require('./chunk-UEIVAZVO.cjs');


var _chunk4OVQXTFUcjs = require('./chunk-4OVQXTFU.cjs');


var _chunkK2MP7E2Pcjs = require('./chunk-K2MP7E2P.cjs');


var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');

// src/database/outputTypeSchemas/NoteTypeUpsertArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeUpsertArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema,
  create: _zod.z.union([_chunkVUEUEYKYcjs.NoteTypeCreateInputSchema, _chunkUEIVAZVOcjs.NoteTypeUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk4OVQXTFUcjs.NoteTypeUpdateInputSchema, _chunkK2MP7E2Pcjs.NoteTypeUncheckedUpdateInputSchema])
}).strict();
var NoteTypeUpsertArgsSchema_default = NoteTypeUpsertArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeUpsertArgsSchema = NoteTypeUpsertArgsSchema; exports.NoteTypeUpsertArgsSchema_default = NoteTypeUpsertArgsSchema_default;
//# sourceMappingURL=chunk-BTNFGPDN.cjs.map