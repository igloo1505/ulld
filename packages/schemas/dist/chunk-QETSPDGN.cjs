"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DailyFocusCreateManyInputSchema.ts
var _zod = require('zod');
var DailyFocusCreateManyInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var DailyFocusCreateManyInputSchema_default = DailyFocusCreateManyInputSchema;




exports.DailyFocusCreateManyInputSchema = DailyFocusCreateManyInputSchema; exports.DailyFocusCreateManyInputSchema_default = DailyFocusCreateManyInputSchema_default;
//# sourceMappingURL=chunk-QETSPDGN.cjs.map