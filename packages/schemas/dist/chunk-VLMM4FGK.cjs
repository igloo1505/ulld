"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');

// src/database/modelSchema/AutoSettingSchema.ts
var _zod = require('zod');
var AutoSettingSchema = _zod.z.object({
  type: _chunk7GJ7K5K6cjs.autoSettingSchema,
  id: _zod.z.number().int(),
  glob: _zod.z.string(),
  value: _zod.z.string()
});
var AutoSettingPartialSchema = AutoSettingSchema.partial();
var AutoSettingSchema_default = AutoSettingSchema;





exports.AutoSettingSchema = AutoSettingSchema; exports.AutoSettingPartialSchema = AutoSettingPartialSchema; exports.AutoSettingSchema_default = AutoSettingSchema_default;
//# sourceMappingURL=chunk-VLMM4FGK.cjs.map