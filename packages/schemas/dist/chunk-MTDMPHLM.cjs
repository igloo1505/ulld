"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTHYSG6MBcjs = require('./chunk-THYSG6MB.cjs');


var _chunkLSFIQF2Ucjs = require('./chunk-LSFIQF2U.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');

// src/database/inputTypeSchemas/HealthReportCreateOrConnectWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTHYSG6MBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkLSFIQF2Ucjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default = HealthReportCreateOrConnectWithoutCurrentDietInputSchema;




exports.HealthReportCreateOrConnectWithoutCurrentDietInputSchema = HealthReportCreateOrConnectWithoutCurrentDietInputSchema; exports.HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default = HealthReportCreateOrConnectWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-MTDMPHLM.cjs.map