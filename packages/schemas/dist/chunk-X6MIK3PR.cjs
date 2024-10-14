"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLWLDMSVEcjs = require('./chunk-LWLDMSVE.cjs');


var _chunkMFFLOYZ4cjs = require('./chunk-MFFLOYZ4.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutHealthReportInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkLWLDMSVEcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkMFFLOYZ4cjs.DietUncheckedCreateWithoutHealthReportInputSchema)])
}).strict();
var DietCreateOrConnectWithoutHealthReportInputSchema_default = DietCreateOrConnectWithoutHealthReportInputSchema;




exports.DietCreateOrConnectWithoutHealthReportInputSchema = DietCreateOrConnectWithoutHealthReportInputSchema; exports.DietCreateOrConnectWithoutHealthReportInputSchema_default = DietCreateOrConnectWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-X6MIK3PR.cjs.map