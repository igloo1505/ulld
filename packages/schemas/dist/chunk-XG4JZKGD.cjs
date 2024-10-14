"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk246S3KKYcjs = require('./chunk-246S3KKY.cjs');

// src/database/inputTypeSchemas/TimePeriodCreateManyDietInputEnvelopeSchema.ts
var _zod = require('zod');
var TimePeriodCreateManyDietInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunk246S3KKYcjs.TimePeriodCreateManyDietInputSchema), _zod.z.lazy(() => _chunk246S3KKYcjs.TimePeriodCreateManyDietInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TimePeriodCreateManyDietInputEnvelopeSchema_default = TimePeriodCreateManyDietInputEnvelopeSchema;




exports.TimePeriodCreateManyDietInputEnvelopeSchema = TimePeriodCreateManyDietInputEnvelopeSchema; exports.TimePeriodCreateManyDietInputEnvelopeSchema_default = TimePeriodCreateManyDietInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-XG4JZKGD.cjs.map