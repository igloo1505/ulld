"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWJPOEPE7cjs = require('./chunk-WJPOEPE7.cjs');

// src/database/inputTypeSchemas/IpynbCreateManySequentialListInputEnvelopeSchema.ts
var _zod = require('zod');
var IpynbCreateManySequentialListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkWJPOEPE7cjs.IpynbCreateManySequentialListInputSchema), _zod.z.lazy(() => _chunkWJPOEPE7cjs.IpynbCreateManySequentialListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManySequentialListInputEnvelopeSchema_default = IpynbCreateManySequentialListInputEnvelopeSchema;




exports.IpynbCreateManySequentialListInputEnvelopeSchema = IpynbCreateManySequentialListInputEnvelopeSchema; exports.IpynbCreateManySequentialListInputEnvelopeSchema_default = IpynbCreateManySequentialListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-VOE26G2S.cjs.map