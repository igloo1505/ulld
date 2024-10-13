"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMMBED2OQcjs = require('./chunk-MMBED2OQ.cjs');


var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/AutoSettingUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var AutoSettingUpdateManyMutationInputSchema = _zod.z.object({
  type: _zod.z.union([_zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema), _zod.z.lazy(() => _chunkMMBED2OQcjs.EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUpdateManyMutationInputSchema_default = AutoSettingUpdateManyMutationInputSchema;




exports.AutoSettingUpdateManyMutationInputSchema = AutoSettingUpdateManyMutationInputSchema; exports.AutoSettingUpdateManyMutationInputSchema_default = AutoSettingUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-BAEQ42QF.cjs.map