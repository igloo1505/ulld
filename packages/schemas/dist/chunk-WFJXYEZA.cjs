"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRVIPGDVFcjs = require('./chunk-RVIPGDVF.cjs');

// src/database/inputTypeSchemas/HealthReportCreateManyCurrentDietInputEnvelopeSchema.ts
var _zod = require('zod');
var HealthReportCreateManyCurrentDietInputEnvelopeSchema = _zod.z.object({
  data: _zod.z.union([_zod.z.lazy(() => _chunkRVIPGDVFcjs.HealthReportCreateManyCurrentDietInputSchema), _zod.z.lazy(() => _chunkRVIPGDVFcjs.HealthReportCreateManyCurrentDietInputSchema).array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var HealthReportCreateManyCurrentDietInputEnvelopeSchema_default = HealthReportCreateManyCurrentDietInputEnvelopeSchema;




exports.HealthReportCreateManyCurrentDietInputEnvelopeSchema = HealthReportCreateManyCurrentDietInputEnvelopeSchema; exports.HealthReportCreateManyCurrentDietInputEnvelopeSchema_default = HealthReportCreateManyCurrentDietInputEnvelopeSchema_default;
//# sourceMappingURL=chunk-WFJXYEZA.cjs.map