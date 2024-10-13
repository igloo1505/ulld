"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB7MTVKMEcjs = require('./chunk-B7MTVKME.cjs');


var _chunkL32UNOIScjs = require('./chunk-L32UNOIS.cjs');


var _chunkTHYSG6MBcjs = require('./chunk-THYSG6MB.cjs');


var _chunkLSFIQF2Ucjs = require('./chunk-LSFIQF2U.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');

// src/database/inputTypeSchemas/HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkL32UNOIScjs.HealthReportUpdateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkB7MTVKMEcjs.HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTHYSG6MBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkLSFIQF2Ucjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema;




exports.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema; exports.HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-Z6FXW23D.cjs.map