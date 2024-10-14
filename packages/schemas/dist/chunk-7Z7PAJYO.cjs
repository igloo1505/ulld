"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUncheckedUpdateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUncheckedUpdateInputSchema_default = SequentialNoteListUncheckedUpdateInputSchema;




exports.SequentialNoteListUncheckedUpdateInputSchema = SequentialNoteListUncheckedUpdateInputSchema; exports.SequentialNoteListUncheckedUpdateInputSchema_default = SequentialNoteListUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-7Z7PAJYO.cjs.map