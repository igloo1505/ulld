"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGQET4L2Ucjs = require('./chunk-GQET4L2U.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutToDoInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGQET4L2Ucjs.MdxNoteUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default;
//# sourceMappingURL=chunk-GTN4KT7N.cjs.map