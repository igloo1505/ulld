"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3Y54DT7Jcjs = require('./chunk-3Y54DT7J.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk3Y54DT7Jcjs.MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-RIWG4T7M.cjs.map