"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkV6PS354Tcjs = require('./chunk-V6PS354T.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkV6PS354Tcjs.MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default;
//# sourceMappingURL=chunk-PVGH6AIE.cjs.map