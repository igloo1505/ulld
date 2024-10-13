"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WaitlistRequestSelectSchema.ts
var _zod = require('zod');
var WaitlistRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional(),
  emailsSent: _zod.z.boolean().optional()
}).strict();
var WaitlistRequestSelectSchema_default = WaitlistRequestSelectSchema;



exports.WaitlistRequestSelectSchema = WaitlistRequestSelectSchema; exports.default = WaitlistRequestSelectSchema_default;
//# sourceMappingURL=WaitlistRequestSelectSchema.cjs.map