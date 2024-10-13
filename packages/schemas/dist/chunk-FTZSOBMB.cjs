"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk56TWOSH3cjs = require('./chunk-56TWOSH3.cjs');


var _chunkOGDYXUUMcjs = require('./chunk-OGDYXUUM.cjs');


var _chunkTGGIC7LLcjs = require('./chunk-TGGIC7LL.cjs');


var _chunkNSNOWG3Dcjs = require('./chunk-NSNOWG3D.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpsertWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietUpsertWithoutHealthReportInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkOGDYXUUMcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunk56TWOSH3cjs.DietUncheckedUpdateWithoutHealthReportInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTGGIC7LLcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkNSNOWG3Dcjs.DietUncheckedCreateWithoutHealthReportInputSchema)]),
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).optional()
}).strict();
var DietUpsertWithoutHealthReportInputSchema_default = DietUpsertWithoutHealthReportInputSchema;




exports.DietUpsertWithoutHealthReportInputSchema = DietUpsertWithoutHealthReportInputSchema; exports.DietUpsertWithoutHealthReportInputSchema_default = DietUpsertWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-FTZSOBMB.cjs.map