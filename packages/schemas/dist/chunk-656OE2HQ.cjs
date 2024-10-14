"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBDMDPJDJcjs = require('./chunk-BDMDPJDJ.cjs');


var _chunkKAN2Y3BTcjs = require('./chunk-KAN2Y3BT.cjs');


var _chunkVQFCCTWGcjs = require('./chunk-VQFCCTWG.cjs');


var _chunkLDHHS452cjs = require('./chunk-LDHHS452.cjs');


var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');

// src/database/outputTypeSchemas/NoteTypeUpsertArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeUpsertArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  where: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema,
  create: _zod.z.union([_chunkBDMDPJDJcjs.NoteTypeCreateInputSchema, _chunkKAN2Y3BTcjs.NoteTypeUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkVQFCCTWGcjs.NoteTypeUpdateInputSchema, _chunkLDHHS452cjs.NoteTypeUncheckedUpdateInputSchema])
}).strict();
var NoteTypeUpsertArgsSchema_default = NoteTypeUpsertArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeUpsertArgsSchema = NoteTypeUpsertArgsSchema; exports.NoteTypeUpsertArgsSchema_default = NoteTypeUpsertArgsSchema_default;
//# sourceMappingURL=chunk-656OE2HQ.cjs.map