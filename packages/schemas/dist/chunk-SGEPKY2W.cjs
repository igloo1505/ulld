"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVUEUEYKYcjs = require('./chunk-VUEUEYKY.cjs');


var _chunkUEIVAZVOcjs = require('./chunk-UEIVAZVO.cjs');

// src/database/outputTypeSchemas/NoteTypeCreateArgsSchema.ts
var _zod = require('zod');
var NoteTypeSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional()
}).strict();
var NoteTypeCreateArgsSchema = _zod.z.object({
  select: NoteTypeSelectSchema.optional(),
  data: _zod.z.union([_chunkVUEUEYKYcjs.NoteTypeCreateInputSchema, _chunkUEIVAZVOcjs.NoteTypeUncheckedCreateInputSchema])
}).strict();
var NoteTypeCreateArgsSchema_default = NoteTypeCreateArgsSchema;





exports.NoteTypeSelectSchema = NoteTypeSelectSchema; exports.NoteTypeCreateArgsSchema = NoteTypeCreateArgsSchema; exports.NoteTypeCreateArgsSchema_default = NoteTypeCreateArgsSchema_default;
//# sourceMappingURL=chunk-SGEPKY2W.cjs.map