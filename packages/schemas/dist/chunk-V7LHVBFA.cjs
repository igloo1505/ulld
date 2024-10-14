"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/modelSchema/AutoSettingSchema.ts
var _zod = require('zod');
var AutoSettingSchema = _zod.z.object({
  type: _chunkDX2TZXTHcjs.autoSettingSchema,
  id: _zod.z.number().int(),
  glob: _zod.z.string(),
  value: _zod.z.string()
});
var AutoSettingPartialSchema = AutoSettingSchema.partial();
var AutoSettingSchema_default = AutoSettingSchema;





exports.AutoSettingSchema = AutoSettingSchema; exports.AutoSettingPartialSchema = AutoSettingPartialSchema; exports.AutoSettingSchema_default = AutoSettingSchema_default;
//# sourceMappingURL=chunk-V7LHVBFA.cjs.map