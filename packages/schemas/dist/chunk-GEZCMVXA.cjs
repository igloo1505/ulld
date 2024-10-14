"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRKDQ3WI4cjs = require('./chunk-RKDQ3WI4.cjs');

// src/database/inputTypeSchemas/ServingCreateManyItemInputEnvelopeSchema.ts
var _zod = require('zod');
var ServingCreateManyItemInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkRKDQ3WI4cjs.ServingCreateManyItemInputSchema), _zod.z.lazy(() => _chunkRKDQ3WI4cjs.ServingCreateManyItemInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ServingCreateManyItemInputEnvelopeSchema_default = ServingCreateManyItemInputEnvelopeSchema;




exports.ServingCreateManyItemInputEnvelopeSchema = ServingCreateManyItemInputEnvelopeSchema; exports.ServingCreateManyItemInputEnvelopeSchema_default = ServingCreateManyItemInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-GEZCMVXA.cjs.map