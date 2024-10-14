"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVE7PCMR5cjs = require('./chunk-VE7PCMR5.cjs');


var _chunkHEXCRLZIcjs = require('./chunk-HEXCRLZI.cjs');


var _chunkOTELCDDVcjs = require('./chunk-OTELCDDV.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkOTELCDDVcjs.HealthReportWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkHEXCRLZIcjs.HealthReportUpdateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkVE7PCMR5cjs.HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema;




exports.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema; exports.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-C5GE763I.cjs.map