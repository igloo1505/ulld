"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ335K6F3cjs = require('./chunk-Q335K6F3.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkQ335K6F3cjs.MdxNoteUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-LSRQSRMU.cjs.map