"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSCGIVMZAcjs = require('./chunk-SCGIVMZA.cjs');


var _chunkWFJXYEZAcjs = require('./chunk-WFJXYEZA.cjs');


var _chunkDQJQRZSBcjs = require('./chunk-DQJQRZSB.cjs');


var _chunkX2HYNX4Kcjs = require('./chunk-X2HYNX4K.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/inputTypeSchemas/HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema).array(), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkSCGIVMZAcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkSCGIVMZAcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkWFJXYEZAcjs.HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema).array()]).optional()
}).strict();
var HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema_default = HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema;




exports.HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema = HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema; exports.HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema_default = HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-MUJP7Z7E.cjs.map