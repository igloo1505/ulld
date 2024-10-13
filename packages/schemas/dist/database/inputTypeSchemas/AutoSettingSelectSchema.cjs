"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/AutoSettingSelectSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingSelectSchema_default = AutoSettingSelectSchema;



exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.default = AutoSettingSelectSchema_default;
//# sourceMappingURL=AutoSettingSelectSchema.cjs.map