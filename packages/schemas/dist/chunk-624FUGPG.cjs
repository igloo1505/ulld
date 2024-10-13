"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/DailyFocusSchema.ts
var _zod = require('zod');
var DailyFocusSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date()
});
var DailyFocusPartialSchema = DailyFocusSchema.partial();
var DailyFocusSchema_default = DailyFocusSchema;





exports.DailyFocusSchema = DailyFocusSchema; exports.DailyFocusPartialSchema = DailyFocusPartialSchema; exports.DailyFocusSchema_default = DailyFocusSchema_default;
//# sourceMappingURL=chunk-624FUGPG.cjs.map