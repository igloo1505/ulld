"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTGGIC7LLcjs = require('./chunk-TGGIC7LL.cjs');


var _chunkNSNOWG3Dcjs = require('./chunk-NSNOWG3D.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutHealthReportInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTGGIC7LLcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkNSNOWG3Dcjs.DietUncheckedCreateWithoutHealthReportInputSchema)])
}).strict();
var DietCreateOrConnectWithoutHealthReportInputSchema_default = DietCreateOrConnectWithoutHealthReportInputSchema;




exports.DietCreateOrConnectWithoutHealthReportInputSchema = DietCreateOrConnectWithoutHealthReportInputSchema; exports.DietCreateOrConnectWithoutHealthReportInputSchema_default = DietCreateOrConnectWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-BWPHRTGW.cjs.map