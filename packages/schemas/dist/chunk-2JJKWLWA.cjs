"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBWPHRTGWcjs = require('./chunk-BWPHRTGW.cjs');


var _chunkTGGIC7LLcjs = require('./chunk-TGGIC7LL.cjs');


var _chunkNSNOWG3Dcjs = require('./chunk-NSNOWG3D.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietCreateNestedOneWithoutHealthReportInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkTGGIC7LLcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkNSNOWG3Dcjs.DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkBWPHRTGWcjs.DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutHealthReportInputSchema_default = DietCreateNestedOneWithoutHealthReportInputSchema;




exports.DietCreateNestedOneWithoutHealthReportInputSchema = DietCreateNestedOneWithoutHealthReportInputSchema; exports.DietCreateNestedOneWithoutHealthReportInputSchema_default = DietCreateNestedOneWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-2JJKWLWA.cjs.map