"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUJRF6Z4Kcjs = require('./chunk-UJRF6Z4K.cjs');


var _chunkO7NFV4VFcjs = require('./chunk-O7NFV4VF.cjs');


var _chunkLWLDMSVEcjs = require('./chunk-LWLDMSVE.cjs');


var _chunkMFFLOYZ4cjs = require('./chunk-MFFLOYZ4.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpsertWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietUpsertWithoutHealthReportInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkO7NFV4VFcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkUJRF6Z4Kcjs.DietUncheckedUpdateWithoutHealthReportInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkLWLDMSVEcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkMFFLOYZ4cjs.DietUncheckedCreateWithoutHealthReportInputSchema)]),
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutHealthReportInputSchema_default = DietUpsertWithoutHealthReportInputSchema;




exports.DietUpsertWithoutHealthReportInputSchema = DietUpsertWithoutHealthReportInputSchema; exports.DietUpsertWithoutHealthReportInputSchema_default = DietUpsertWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-DDTQABQG.cjs.map