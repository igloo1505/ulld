"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/SettingsAppendixSchema.ts
var _zod = require('zod');
var SettingsAppendixSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer),
  createdAt: _zod.z.coerce.date(),
  updatedAt: _zod.z.coerce.date()
});
var SettingsAppendixPartialSchema = SettingsAppendixSchema.partial();
var SettingsAppendixSchema_default = SettingsAppendixSchema;





exports.SettingsAppendixSchema = SettingsAppendixSchema; exports.SettingsAppendixPartialSchema = SettingsAppendixPartialSchema; exports.SettingsAppendixSchema_default = SettingsAppendixSchema_default;
//# sourceMappingURL=chunk-BGKA5QZE.cjs.map