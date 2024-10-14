"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWVMXNLZFcjs = require('./chunk-WVMXNLZF.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkWVMXNLZFcjs.MdxNoteUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-M73SXJO4.cjs.map