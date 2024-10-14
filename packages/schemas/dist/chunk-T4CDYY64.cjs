"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVE7PCMR5cjs = require('./chunk-VE7PCMR5.cjs');


var _chunkHEXCRLZIcjs = require('./chunk-HEXCRLZI.cjs');


var _chunkDQJQRZSBcjs = require('./chunk-DQJQRZSB.cjs');


var _chunkX2HYNX4Kcjs = require('./chunk-X2HYNX4K.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/inputTypeSchemas/HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkHEXCRLZIcjs.HealthReportUpdateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkVE7PCMR5cjs.HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDQJQRZSBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkX2HYNX4Kcjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema;




exports.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema; exports.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-T4CDYY64.cjs.map