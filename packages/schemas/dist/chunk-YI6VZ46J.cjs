"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk56TWOSH3cjs = require('./chunk-56TWOSH3.cjs');


var _chunkOGDYXUUMcjs = require('./chunk-OGDYXUUM.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk4QJOIHDOcjs.DietWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkOGDYXUUMcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunk56TWOSH3cjs.DietUncheckedUpdateWithoutHealthReportInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default = DietUpdateToOneWithWhereWithoutHealthReportInputSchema;




exports.DietUpdateToOneWithWhereWithoutHealthReportInputSchema = DietUpdateToOneWithWhereWithoutHealthReportInputSchema; exports.DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default = DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-YI6VZ46J.cjs.map