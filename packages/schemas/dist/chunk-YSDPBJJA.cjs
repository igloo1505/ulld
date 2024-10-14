"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkVJ3IVZTKcjs = require('./chunk-VJ3IVZTK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUncheckedCreateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.string(),
  MdxNote: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkVJ3IVZTKcjs.IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedCreateInputSchema_default = SequentialNoteListUncheckedCreateInputSchema;




exports.SequentialNoteListUncheckedCreateInputSchema = SequentialNoteListUncheckedCreateInputSchema; exports.SequentialNoteListUncheckedCreateInputSchema_default = SequentialNoteListUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-YSDPBJJA.cjs.map