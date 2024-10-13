"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPNK4XJOPcjs = require('./chunk-PNK4XJOP.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateManySequentialListInputEnvelopeSchema.ts
var _zod = require('zod');
var MdxNoteCreateManySequentialListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkPNK4XJOPcjs.MdxNoteCreateManySequentialListInputSchema), _zod.z.lazy(() => _chunkPNK4XJOPcjs.MdxNoteCreateManySequentialListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var MdxNoteCreateManySequentialListInputEnvelopeSchema_default = MdxNoteCreateManySequentialListInputEnvelopeSchema;




exports.MdxNoteCreateManySequentialListInputEnvelopeSchema = MdxNoteCreateManySequentialListInputEnvelopeSchema; exports.MdxNoteCreateManySequentialListInputEnvelopeSchema_default = MdxNoteCreateManySequentialListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-WMVP2R7B.cjs.map