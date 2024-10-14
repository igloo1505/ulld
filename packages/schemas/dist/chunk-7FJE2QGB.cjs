"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/SettingsAppendixUncheckedCreateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer),
  createdAt: _zod.z.coerce.date().optional(),
  updatedAt: _zod.z.coerce.date().optional()
}).strict();
var SettingsAppendixUncheckedCreateInputSchema_default = SettingsAppendixUncheckedCreateInputSchema;




exports.SettingsAppendixUncheckedCreateInputSchema = SettingsAppendixUncheckedCreateInputSchema; exports.SettingsAppendixUncheckedCreateInputSchema_default = SettingsAppendixUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-7FJE2QGB.cjs.map