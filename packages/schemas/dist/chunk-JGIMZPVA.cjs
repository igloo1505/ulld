"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDX2TZXTHcjs = require('./chunk-DX2TZXTH.cjs');

// src/database/inputTypeSchemas/AutoSettingUncheckedCreateInputSchema.ts
var _zod = require('zod');
var AutoSettingUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  type: _zod.z.lazy(() => _chunkDX2TZXTHcjs.autoSettingSchema),
  glob: _zod.z.string(),
  value: _zod.z.string()
}).strict();
var AutoSettingUncheckedCreateInputSchema_default = AutoSettingUncheckedCreateInputSchema;




exports.AutoSettingUncheckedCreateInputSchema = AutoSettingUncheckedCreateInputSchema; exports.AutoSettingUncheckedCreateInputSchema_default = AutoSettingUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-JGIMZPVA.cjs.map