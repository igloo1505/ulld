"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMMBED2OQcjs = require('./chunk-MMBED2OQ.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var AutoSettingUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema), _zod.z.lazy(() => _chunkMMBED2OQcjs.EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUncheckedUpdateManyInputSchema_default = AutoSettingUncheckedUpdateManyInputSchema;




exports.AutoSettingUncheckedUpdateManyInputSchema = AutoSettingUncheckedUpdateManyInputSchema; exports.AutoSettingUncheckedUpdateManyInputSchema_default = AutoSettingUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-UUVYJAV3.cjs.map