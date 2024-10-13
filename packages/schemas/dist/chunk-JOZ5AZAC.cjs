"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ7UNHGPZcjs = require('./chunk-Q7UNHGPZ.cjs');

// src/database/inputTypeSchemas/ServingCreateManyItemInputEnvelopeSchema.ts
var _zod = require('zod');
var ServingCreateManyItemInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkQ7UNHGPZcjs.ServingCreateManyItemInputSchema), _zod.z.lazy(() => _chunkQ7UNHGPZcjs.ServingCreateManyItemInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyItemInputEnvelopeSchema_default = ServingCreateManyItemInputEnvelopeSchema;




exports.ServingCreateManyItemInputEnvelopeSchema = ServingCreateManyItemInputEnvelopeSchema; exports.ServingCreateManyItemInputEnvelopeSchema_default = ServingCreateManyItemInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-JOZ5AZAC.cjs.map