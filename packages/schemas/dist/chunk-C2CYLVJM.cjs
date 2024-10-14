"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ORP5GWVcjs = require('./chunk-6ORP5GWV.cjs');


var _chunkDDTQABQGcjs = require('./chunk-DDTQABQG.cjs');


var _chunkUJRF6Z4Kcjs = require('./chunk-UJRF6Z4K.cjs');


var _chunkO7NFV4VFcjs = require('./chunk-O7NFV4VF.cjs');


var _chunkX6MIK3PRcjs = require('./chunk-X6MIK3PR.cjs');


var _chunkLWLDMSVEcjs = require('./chunk-LWLDMSVE.cjs');


var _chunkMFFLOYZ4cjs = require('./chunk-MFFLOYZ4.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpdateOneWithoutHealthReportNestedInputSchema.ts
var _zod = require('zod');
var DietUpdateOneWithoutHealthReportNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkLWLDMSVEcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkMFFLOYZ4cjs.DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkX6MIK3PRcjs.DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkDDTQABQGcjs.DietUpsertWithoutHealthReportInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk6ORP5GWVcjs.DietUpdateToOneWithWhereWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkO7NFV4VFcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkUJRF6Z4Kcjs.DietUncheckedUpdateWithoutHealthReportInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutHealthReportNestedInputSchema_default = DietUpdateOneWithoutHealthReportNestedInputSchema;




exports.DietUpdateOneWithoutHealthReportNestedInputSchema = DietUpdateOneWithoutHealthReportNestedInputSchema; exports.DietUpdateOneWithoutHealthReportNestedInputSchema_default = DietUpdateOneWithoutHealthReportNestedInputSchema_default;
//# sourceMappingURL=chunk-C2CYLVJM.cjs.map