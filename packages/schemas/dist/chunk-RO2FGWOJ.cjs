"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DailyFocusUncheckedCreateInputSchema.ts
var _zod = require('zod');
var DailyFocusUncheckedCreateInputSchema = _zod.z.object({
  value: _zod.z.string(),
  createdAt: _zod.z.coerce.date().optional()
}).strict();
var DailyFocusUncheckedCreateInputSchema_default = DailyFocusUncheckedCreateInputSchema;




exports.DailyFocusUncheckedCreateInputSchema = DailyFocusUncheckedCreateInputSchema; exports.DailyFocusUncheckedCreateInputSchema_default = DailyFocusUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-RO2FGWOJ.cjs.map