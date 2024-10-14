"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVXF6IDBWcjs = require('./chunk-VXF6IDBW.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/MdxNoteUpdateManyArgsSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema, _chunkVXF6IDBWcjs.MdxNoteUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.MdxNoteWhereInputSchema.optional()
}).strict();
var MdxNoteUpdateManyArgsSchema_default = MdxNoteUpdateManyArgsSchema;




exports.MdxNoteUpdateManyArgsSchema = MdxNoteUpdateManyArgsSchema; exports.MdxNoteUpdateManyArgsSchema_default = MdxNoteUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-6F4YCZMM.cjs.map