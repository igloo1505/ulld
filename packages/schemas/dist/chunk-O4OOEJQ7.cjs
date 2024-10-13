"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGBN4RVSQcjs = require('./chunk-GBN4RVSQ.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkGBN4RVSQcjs.MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-O4OOEJQ7.cjs.map