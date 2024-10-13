"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DailyFocusSelectSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusSelectSchema_default = DailyFocusSelectSchema;



exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.default = DailyFocusSelectSchema_default;
//# sourceMappingURL=DailyFocusSelectSchema.cjs.map