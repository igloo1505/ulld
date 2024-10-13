"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GJ7K5K6cjs = require('./chunk-7GJ7K5K6.cjs');

// src/database/inputTypeSchemas/AutoSettingCreateInputSchema.ts
var _zod = require('zod');
var AutoSettingCreateInputSchema = _zod.z.object({
  type: _zod.z.lazy(() => _chunk7GJ7K5K6cjs.autoSettingSchema),
  glob: _zod.z.string(),
  value: _zod.z.string()
}).strict();
var AutoSettingCreateInputSchema_default = AutoSettingCreateInputSchema;




exports.AutoSettingCreateInputSchema = AutoSettingCreateInputSchema; exports.AutoSettingCreateInputSchema_default = AutoSettingCreateInputSchema_default;
//# sourceMappingURL=chunk-XJQVTL2K.cjs.map