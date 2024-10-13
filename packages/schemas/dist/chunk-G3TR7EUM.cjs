"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/WaitlistRequestSchema.ts
var _zod = require('zod');
var WaitlistRequestSchema = _zod.z.object({
  id: _zod.z.number().int(),
  email: _zod.z.string(),
  receivedOn: _zod.z.coerce.date(),
  emailsSent: _zod.z.number().int()
});
var WaitlistRequestPartialSchema = WaitlistRequestSchema.partial();
var WaitlistRequestSchema_default = WaitlistRequestSchema;





exports.WaitlistRequestSchema = WaitlistRequestSchema; exports.WaitlistRequestPartialSchema = WaitlistRequestPartialSchema; exports.WaitlistRequestSchema_default = WaitlistRequestSchema_default;
//# sourceMappingURL=chunk-G3TR7EUM.cjs.map