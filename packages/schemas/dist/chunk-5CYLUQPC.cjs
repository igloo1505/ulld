"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTLQD73MQcjs = require('./chunk-TLQD73MQ.cjs');


var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/AutoSettingUpdateInputSchema.ts
var _zod = require('zod');
var AutoSettingUpdateInputSchema = _zod.z.object({
  type: _zod.z.union([_zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema), _zod.z.lazy(() => _chunkTLQD73MQcjs.EnumautoSettingFieldUpdateOperationsInputSchema)]).optional(),
  glob: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  value: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var AutoSettingUpdateInputSchema_default = AutoSettingUpdateInputSchema;




exports.AutoSettingUpdateInputSchema = AutoSettingUpdateInputSchema; exports.AutoSettingUpdateInputSchema_default = AutoSettingUpdateInputSchema_default;
//# sourceMappingURL=chunk-5CYLUQPC.cjs.map