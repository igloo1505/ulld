"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SettingsAppendixCreateManyInputSchema.ts
var _zod = require('zod');
var SettingsAppendixCreateManyInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer),
  createdAt: _zod.z.coerce.date().optional(),
  updatedAt: _zod.z.coerce.date().optional()
}).strict();
var SettingsAppendixCreateManyInputSchema_default = SettingsAppendixCreateManyInputSchema;




exports.SettingsAppendixCreateManyInputSchema = SettingsAppendixCreateManyInputSchema; exports.SettingsAppendixCreateManyInputSchema_default = SettingsAppendixCreateManyInputSchema_default;
//# sourceMappingURL=chunk-QIOO7SSM.cjs.map