"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDQJQRZSBcjs = require('./chunk-DQJQRZSB.cjs');


var _chunkX2HYNX4Kcjs = require('./chunk-X2HYNX4K.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/inputTypeSchemas/HealthReportCreateOrConnectWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default = HealthReportCreateOrConnectWithoutCurrentDietInputSchema;




exports.HealthReportCreateOrConnectWithoutCurrentDietInputSchema = HealthReportCreateOrConnectWithoutCurrentDietInputSchema; exports.HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default = HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-SCGIVMZA.cjs.map