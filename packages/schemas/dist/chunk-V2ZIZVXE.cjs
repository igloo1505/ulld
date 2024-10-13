"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2AFBC4LIcjs = require('./chunk-2AFBC4LI.cjs');

// src/database/inputTypeSchemas/HealthReportCreateManyCurrentDietInputEnvelopeSchema.ts
var _zod = require('zod');
var HealthReportCreateManyCurrentDietInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunk2AFBC4LIcjs.HealthReportCreateManyCurrentDietInputSchema), _zod.z.lazy(() => _chunk2AFBC4LIcjs.HealthReportCreateManyCurrentDietInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var HealthReportCreateManyCurrentDietInputEnvelopeSchema_default = HealthReportCreateManyCurrentDietInputEnvelopeSchema;




exports.HealthReportCreateManyCurrentDietInputEnvelopeSchema = HealthReportCreateManyCurrentDietInputEnvelopeSchema; exports.HealthReportCreateManyCurrentDietInputEnvelopeSchema_default = HealthReportCreateManyCurrentDietInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-V2ZIZVXE.cjs.map