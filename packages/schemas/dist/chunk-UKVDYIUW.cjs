"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX6MIK3PRcjs = require('./chunk-X6MIK3PR.cjs');


var _chunkLWLDMSVEcjs = require('./chunk-LWLDMSVE.cjs');


var _chunkMFFLOYZ4cjs = require('./chunk-MFFLOYZ4.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietCreateNestedOneWithoutHealthReportInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkLWLDMSVEcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkMFFLOYZ4cjs.DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkX6MIK3PRcjs.DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutHealthReportInputSchema_default = DietCreateNestedOneWithoutHealthReportInputSchema;




exports.DietCreateNestedOneWithoutHealthReportInputSchema = DietCreateNestedOneWithoutHealthReportInputSchema; exports.DietCreateNestedOneWithoutHealthReportInputSchema_default = DietCreateNestedOneWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-UKVDYIUW.cjs.map