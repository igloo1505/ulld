"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DailyFocusCreateInputSchema.ts
var _zod = require('zod');
var DailyFocusCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var DailyFocusCreateInputSchema_default = DailyFocusCreateInputSchema;




exports.DailyFocusCreateInputSchema = DailyFocusCreateInputSchema; exports.DailyFocusCreateInputSchema_default = DailyFocusCreateInputSchema_default;
//# sourceMappingURL=chunk-KLKNQNVS.cjs.map