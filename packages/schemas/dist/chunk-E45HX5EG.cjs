"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBDMDPJDJcjs = require('./chunk-BDMDPJDJ.cjs');


var _chunkKAN2Y3BTcjs = require('./chunk-KAN2Y3BT.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  data: _zod.z.union([_chunkBDMDPJDJcjs.NoteTypeCreateInputSchema, _chunkKAN2Y3BTcjs.NoteTypeUncheckedCreateInputSchema])
}).strict();
var NoteTypeCreateArgsSchema_default = NoteTypeCreateArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeCreateArgsSchema = NoteTypeCreateArgsSchema; exports.NoteTypeCreateArgsSchema_default = NoteTypeCreateArgsSchema_default;
//# sourceMappingURL=chunk-E45HX5EG.cjs.map