"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVQFCCTWGcjs = require('./chunk-VQFCCTWG.cjs');


var _chunkLDHHS452cjs = require('./chunk-LDHHS452.cjs');


var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');

// src/database/outputTypeSchemas/NoteTypeUpdateArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeUpdateArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  data: _zod.z.union([_chunkVQFCCTWGcjs.NoteTypeUpdateInputSchema, _chunkLDHHS452cjs.NoteTypeUncheckedUpdateInputSchema]),
  where: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeUpdateArgsSchema_default = NoteTypeUpdateArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeUpdateArgsSchema = NoteTypeUpdateArgsSchema; exports.NoteTypeUpdateArgsSchema_default = NoteTypeUpdateArgsSchema_default;
//# sourceMappingURL=chunk-UDSOE6DN.cjs.map