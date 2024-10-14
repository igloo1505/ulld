"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDI4CF2CKcjs = require('./chunk-DI4CF2CK.cjs');


var _chunkY6DPRYUTcjs = require('./chunk-Y6DPRYUT.cjs');


var _chunkNNCJCUTHcjs = require('./chunk-NNCJCUTH.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY6DPRYUTcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkNNCJCUTHcjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkDI4CF2CKcjs.MdxNoteUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-PEXIYNPF.cjs.map