"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTLQD73MQcjs = require('./chunk-TLQD73MQ.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/AutoSettingUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var AutoSettingUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema), _zod.z.lazy(() => _chunkTLQD73MQcjs.EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUncheckedUpdateManyInputSchema_default = AutoSettingUncheckedUpdateManyInputSchema;




exports.AutoSettingUncheckedUpdateManyInputSchema = AutoSettingUncheckedUpdateManyInputSchema; exports.AutoSettingUncheckedUpdateManyInputSchema_default = AutoSettingUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-DO2BK5LO.cjs.map