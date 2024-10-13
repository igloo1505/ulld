"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKBIE4T7Ycjs = require('./chunk-KBIE4T7Y.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkKBIE4T7Ycjs.MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default;
//# sourceMappingURL=chunk-PXEPRLDM.cjs.map