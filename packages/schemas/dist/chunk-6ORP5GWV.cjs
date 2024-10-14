"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUJRF6Z4Kcjs = require('./chunk-UJRF6Z4K.cjs');


var _chunkO7NFV4VFcjs = require('./chunk-O7NFV4VF.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/inputTypeSchemas/DietUpdateToOneWithWhereWithoutHealthReportInputSchema.ts
var _zod = require('zod');
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkZGGHUMG7cjs.DietWhereInputSchema).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkO7NFV4VFcjs.DietUpdateWithoutHealthReportInputSchema), _zod.z.lazy(() => _chunkUJRF6Z4Kcjs.DietUncheckedUpdateWithoutHealthReportInputSchema)])
}).strict();
var DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default = DietUpdateToOneWithWhereWithoutHealthReportInputSchema;




exports.DietUpdateToOneWithWhereWithoutHealthReportInputSchema = DietUpdateToOneWithWhereWithoutHealthReportInputSchema; exports.DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default = DietUpdateToOneWithWhereWithoutHealthReportInputSchema_default;
//# sourceMappingURL=chunk-6ORP5GWV.cjs.map