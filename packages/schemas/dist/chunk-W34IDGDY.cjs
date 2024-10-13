"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYI6VZ46Jcjs = require('./chunk-YI6VZ46J.cjs');


var _chunkFTZSOBMBcjs = require('./chunk-FTZSOBMB.cjs');


var _chunk56TWOSH3cjs = require('./chunk-56TWOSH3.cjs');


var _chunkOGDYXUUMcjs = require('./chunk-OGDYXUUM.cjs');


var _chunkBWPHRTGWcjs = require('./chunk-BWPHRTGW.cjs');


var _chunkTGGIC7LLcjs = require('./chunk-TGGIC7LL.cjs');


var _chunkNSNOWG3Dcjs = require('./chunk-NSNOWG3D.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpdateOneWithoutHealthReportNestedInputSchema.ts
var _zod = require('zod');
var DietUpdateOneWithoutHealthReportNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkTGGIC7LLcjs.DietCreateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkNSNOWG3Dcjs.DietUncheckedCreateWithoutHealthReportInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkBWPHRTGWcjs.DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkFTZSOBMBcjs.DietUpsertWithoutHealthReportInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkYI6VZ46Jcjs.DietUpdateToOneWithWhereWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkOGDYXUUMcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunk56TWOSH3cjs.DietUncheckedUpdateWithoutHealthReportInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutHealthReportNestedInputSchema_default = DietUpdateOneWithoutHealthReportNestedInputSchema;




exports.DietUpdateOneWithoutHealthReportNestedInputSchema = DietUpdateOneWithoutHealthReportNestedInputSchema; exports.DietUpdateOneWithoutHealthReportNestedInputSchema_default = DietUpdateOneWithoutHealthReportNestedInputSchema_default;
//# sourceMappingURL=chunk-W34IDGDY.cjs.map