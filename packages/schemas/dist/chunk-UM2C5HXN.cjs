"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WaitlistRequestCreateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateInputSchema = _zod.z.object({
  email: _zod.z.string(),
  receivedOn: _zod.z.coerce.date().optional(),
  emailsSent: _zod.z.number().int().optional()
}).strict();
var WaitlistRequestCreateInputSchema_default = WaitlistRequestCreateInputSchema;




exports.WaitlistRequestCreateInputSchema = WaitlistRequestCreateInputSchema; exports.WaitlistRequestCreateInputSchema_default = WaitlistRequestCreateInputSchema_default;
//# sourceMappingURL=chunk-UM2C5HXN.cjs.map