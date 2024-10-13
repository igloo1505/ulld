"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk6UVIQKPKcjs = require('./chunk-6UVIQKPK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListCreateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.string(),
  MdxNote: _zod.z.lazy(() => _chunk6UVIQKPKcjs.MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunk6UVIQKPKcjs.IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListCreateInputSchema_default = SequentialNoteListCreateInputSchema;




exports.SequentialNoteListCreateInputSchema = SequentialNoteListCreateInputSchema; exports.SequentialNoteListCreateInputSchema_default = SequentialNoteListCreateInputSchema_default;
//# sourceMappingURL=chunk-AZX3COPB.cjs.map