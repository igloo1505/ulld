"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkMB3XNPS2cjs = require('./chunk-MB3XNPS2.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/SettingsAppendixUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var SettingsAppendixUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkMB3XNPS2cjs.BytesFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SettingsAppendixUncheckedUpdateManyInputSchema_default = SettingsAppendixUncheckedUpdateManyInputSchema;




exports.SettingsAppendixUncheckedUpdateManyInputSchema = SettingsAppendixUncheckedUpdateManyInputSchema; exports.SettingsAppendixUncheckedUpdateManyInputSchema_default = SettingsAppendixUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-X65BKZOS.cjs.map