"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUpdateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUpdateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUpdateInputSchema_default = SequentialNoteListUpdateInputSchema;




exports.SequentialNoteListUpdateInputSchema = SequentialNoteListUpdateInputSchema; exports.SequentialNoteListUpdateInputSchema_default = SequentialNoteListUpdateInputSchema_default;
//# sourceMappingURL=chunk-MNSSBB6W.cjs.map