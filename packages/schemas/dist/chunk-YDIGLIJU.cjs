"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkB7MTVKMEcjs = require('./chunk-B7MTVKME.cjs');


var _chunkL32UNOIScjs = require('./chunk-L32UNOIS.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');

// src/database/inputTypeSchemas/HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkL32UNOIScjs.HealthReportUpdateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkB7MTVKMEcjs.HealthReportUncheckedUpdateWithoutCurrentDietInputSchema)])
}).strict();
var HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema;




exports.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema; exports.HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default = HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-YDIGLIJU.cjs.map