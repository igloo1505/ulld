"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS5PFS5EVcjs = require('./chunk-S5PFS5EV.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTagsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkS5PFS5EVcjs.MdxNoteUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default;
//# sourceMappingURL=chunk-UYFFMRT7.cjs.map