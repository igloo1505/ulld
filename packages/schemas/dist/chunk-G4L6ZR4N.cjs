"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRFCZ7KARcjs = require('./chunk-RFCZ7KAR.cjs');


var _chunk66MNRTPKcjs = require('./chunk-66MNRTPK.cjs');


var _chunkZQRQIKS2cjs = require('./chunk-ZQRQIKS2.cjs');

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema.ts
var _zod = require('zod');
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk66MNRTPKcjs.MdxNoteScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkZQRQIKS2cjs.MdxNoteUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkRFCZ7KARcjs.MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;




exports.MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema; exports.MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default;
//# sourceMappingURL=chunk-G4L6ZR4N.cjs.map