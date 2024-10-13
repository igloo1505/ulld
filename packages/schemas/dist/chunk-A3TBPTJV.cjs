"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQKVTJZNFcjs = require('./chunk-QKVTJZNF.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateManyDietInputEnvelopeSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyDietInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkQKVTJZNFcjs.TimePeriodCreateManyDietInputSchema), _zod.z.lazy(() => _chunkQKVTJZNFcjs.TimePeriodCreateManyDietInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyDietInputEnvelopeSchema_default = TimePeriodCreateManyDietInputEnvelopeSchema;




exports.TimePeriodCreateManyDietInputEnvelopeSchema = TimePeriodCreateManyDietInputEnvelopeSchema; exports.TimePeriodCreateManyDietInputEnvelopeSchema_default = TimePeriodCreateManyDietInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-A3TBPTJV.cjs.map