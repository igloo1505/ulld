"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WaitlistRequestCreateManyInputSchema.ts
var _zod = require('zod');
var WaitlistRequestCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  email: _zod.z.string(),
  receivedOn: _zod.z.coerce.date().optional(),
  emailsSent: _zod.z.number().int().optional()
}).strict();
var WaitlistRequestCreateManyInputSchema_default = WaitlistRequestCreateManyInputSchema;




exports.WaitlistRequestCreateManyInputSchema = WaitlistRequestCreateManyInputSchema; exports.WaitlistRequestCreateManyInputSchema_default = WaitlistRequestCreateManyInputSchema_default;
//# sourceMappingURL=chunk-SF47WOE2.cjs.map