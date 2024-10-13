"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkF67HEIG4cjs = require('./chunk-F67HEIG4.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUncheckedUpdateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: _zod.z.lazy(() => _chunkF67HEIG4cjs.MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkF67HEIG4cjs.IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedUpdateInputSchema_default = SequentialNoteListUncheckedUpdateInputSchema;




exports.SequentialNoteListUncheckedUpdateInputSchema = SequentialNoteListUncheckedUpdateInputSchema; exports.SequentialNoteListUncheckedUpdateInputSchema_default = SequentialNoteListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-KDN6R4HW.cjs.map