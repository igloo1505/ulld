"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListCreateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.string(),
  MdxNote: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListCreateInputSchema_default = SequentialNoteListCreateInputSchema;




exports.SequentialNoteListCreateInputSchema = SequentialNoteListCreateInputSchema; exports.SequentialNoteListCreateInputSchema_default = SequentialNoteListCreateInputSchema_default;
//# sourceMappingURL=chunk-BY3UO7OD.cjs.map