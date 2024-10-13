"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3IN2VURMcjs = require('./chunk-3IN2VURM.cjs');


var _chunk5XDXV7MAcjs = require('./chunk-5XDXV7MA.cjs');


var _chunkOLN5KQBLcjs = require('./chunk-OLN5KQBL.cjs');

// src/database/outputTypeSchemas/NoteTypeUpdateManyArgsSchema.ts
var _zod = require('zod');
var NoteTypeUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk3IN2VURMcjs.NoteTypeUpdateManyMutationInputSchema, _chunk5XDXV7MAcjs.NoteTypeUncheckedUpdateManyInputSchema]),
  where: _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema.optional()
}).strict();
var NoteTypeUpdateManyArgsSchema_default = NoteTypeUpdateManyArgsSchema;




exports.NoteTypeUpdateManyArgsSchema = NoteTypeUpdateManyArgsSchema; exports.NoteTypeUpdateManyArgsSchema_default = NoteTypeUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-SIO4NYNA.cjs.map