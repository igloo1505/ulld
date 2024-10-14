"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAQEA3AKLcjs = require('./chunk-AQEA3AKL.cjs');

// src/database/inputTypeSchemas/MdxNoteCreateManySequentialListInputEnvelopeSchema.ts
var _zod = require('zod');
var MdxNoteCreateManySequentialListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkAQEA3AKLcjs.MdxNoteCreateManySequentialListInputSchema), _zod.z.lazy(() => _chunkAQEA3AKLcjs.MdxNoteCreateManySequentialListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var MdxNoteCreateManySequentialListInputEnvelopeSchema_default = MdxNoteCreateManySequentialListInputEnvelopeSchema;




exports.MdxNoteCreateManySequentialListInputEnvelopeSchema = MdxNoteCreateManySequentialListInputEnvelopeSchema; exports.MdxNoteCreateManySequentialListInputEnvelopeSchema_default = MdxNoteCreateManySequentialListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-BXQ3TKC4.cjs.map