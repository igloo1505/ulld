"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  email: _zod.z.string(),
  receivedOn: _zod.z.coerce.date().optional(),
  emailsSent: _zod.z.number().int().optional()
}).strict();
var WaitlistRequestUncheckedCreateInputSchema_default = WaitlistRequestUncheckedCreateInputSchema;




exports.WaitlistRequestUncheckedCreateInputSchema = WaitlistRequestUncheckedCreateInputSchema; exports.WaitlistRequestUncheckedCreateInputSchema_default = WaitlistRequestUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-IGVH2WA7.cjs.map