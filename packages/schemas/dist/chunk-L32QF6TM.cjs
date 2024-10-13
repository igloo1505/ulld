"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4OVQXTFUcjs = require('./chunk-4OVQXTFU.cjs');


var _chunkK2MP7E2Pcjs = require('./chunk-K2MP7E2P.cjs');


var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');

// src/database/outputTypeSchemas/NoteTypeUpdateArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeUpdateArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  data: _zod.z.union([_chunk4OVQXTFUcjs.NoteTypeUpdateInputSchema, _chunkK2MP7E2Pcjs.NoteTypeUncheckedUpdateInputSchema]),
  where: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeUpdateArgsSchema_default = NoteTypeUpdateArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeUpdateArgsSchema = NoteTypeUpdateArgsSchema; exports.NoteTypeUpdateArgsSchema_default = NoteTypeUpdateArgsSchema_default;
//# sourceMappingURL=chunk-L32QF6TM.cjs.map