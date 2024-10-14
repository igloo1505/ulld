"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SettingsAppendixCreateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer),
  createdAt: _zod.z.coerce.date().optional(),
  updatedAt: _zod.z.coerce.date().optional()
}).strict();
var SettingsAppendixCreateInputSchema_default = SettingsAppendixCreateInputSchema;




exports.SettingsAppendixCreateInputSchema = SettingsAppendixCreateInputSchema; exports.SettingsAppendixCreateInputSchema_default = SettingsAppendixCreateInputSchema_default;
//# sourceMappingURL=chunk-CONL6IP3.cjs.map