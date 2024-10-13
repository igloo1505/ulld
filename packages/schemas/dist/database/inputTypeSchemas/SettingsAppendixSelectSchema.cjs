"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SettingsAppendixSelectSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixSelectSchema_default = SettingsAppendixSelectSchema;



exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.default = SettingsAppendixSelectSchema_default;
//# sourceMappingURL=SettingsAppendixSelectSchema.cjs.map