"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk642YCHOVcjs = require('./chunk-642YCHOV.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SequentialNoteListUpdateInputSchema.ts
var _zod = require('zod');
var SequentialNoteListUpdateInputSchema = _zod.z.object({
  sequentialKey: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  MdxNote: _zod.z.lazy(() => _chunk642YCHOVcjs.MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunk642YCHOVcjs.IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
var SequentialNoteListUpdateInputSchema_default = SequentialNoteListUpdateInputSchema;




exports.SequentialNoteListUpdateInputSchema = SequentialNoteListUpdateInputSchema; exports.SequentialNoteListUpdateInputSchema_default = SequentialNoteListUpdateInputSchema_default;
//# sourceMappingURL=chunk-5BJBSE7J.cjs.map