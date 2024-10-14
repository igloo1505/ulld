"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMEGTU2SScjs = require('./chunk-MEGTU2SS.cjs');

// src/database/inputTypeSchemas/IpynbCreateManySequentialListInputEnvelopeSchema.ts
var _zod = require('zod');
var IpynbCreateManySequentialListInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkMEGTU2SScjs.IpynbCreateManySequentialListInputSchema), _zod.z.lazy(() => _chunkMEGTU2SScjs.IpynbCreateManySequentialListInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var IpynbCreateManySequentialListInputEnvelopeSchema_default = IpynbCreateManySequentialListInputEnvelopeSchema;




exports.IpynbCreateManySequentialListInputEnvelopeSchema = IpynbCreateManySequentialListInputEnvelopeSchema; exports.IpynbCreateManySequentialListInputEnvelopeSchema_default = IpynbCreateManySequentialListInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-C7OHS3IC.cjs.map