"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/inputTypeSchemas/AutoSettingCreateInputSchema.ts
var _zod = require('zod');
var AutoSettingCreateInputSchema = _zod.z.object({
  type: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema),
  glob: _zod.z.string(),
  value: _zod.z.string()
}).strict();
var AutoSettingCreateInputSchema_default = AutoSettingCreateInputSchema;




exports.AutoSettingCreateInputSchema = AutoSettingCreateInputSchema; exports.AutoSettingCreateInputSchema_default = AutoSettingCreateInputSchema_default;
//# sourceMappingURL=chunk-OQWVPOSN.cjs.map