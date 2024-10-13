"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMTDMPHLMcjs = require('./chunk-MTDMPHLM.cjs');


var _chunkV2ZIZVXEcjs = require('./chunk-V2ZIZVXE.cjs');


var _chunkTHYSG6MBcjs = require('./chunk-THYSG6MB.cjs');


var _chunkLSFIQF2Ucjs = require('./chunk-LSFIQF2U.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');

// src/database/inputTypeSchemas/HealthReportCreateNestedManyWithoutCurrentDietInputSchema.ts
var _zod = require('zod');
var HealthReportCreateNestedManyWithoutCurrentDietInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkTHYSG6MBcjs.HealthReportCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkTHYSG6MBcjs.HealthReportCreateWithoutCurrentDietInputSchema).array(), _zod.z.lazy(() => _chunkLSFIQF2Ucjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkLSFIQF2Ucjs.HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkMTDMPHLMcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema), _zod.z.lazy(() => _chunkMTDMPHLMcjs.HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkV2ZIZVXEcjs.HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema), _zod.z.lazy(() => _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema).array()]).optional()
}).strict();
var HealthReportCreateNestedManyWithoutCurrentDietInputSchema_default = HealthReportCreateNestedManyWithoutCurrentDietInputSchema;




exports.HealthReportCreateNestedManyWithoutCurrentDietInputSchema = HealthReportCreateNestedManyWithoutCurrentDietInputSchema; exports.HealthReportCreateNestedManyWithoutCurrentDietInputSchema_default = HealthReportCreateNestedManyWithoutCurrentDietInputSchema_default;
//# sourceMappingURL=chunk-EJGWM35R.cjs.map