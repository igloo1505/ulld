"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BusinessContactSelectSchema.ts
var _zod = require('zod');
var BusinessContactSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  companyName: _zod.z.boolean().optional(),
  contactName: _zod.z.boolean().optional(),
  contactPreference: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  phone: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  purpose: _zod.z.boolean().optional()
}).strict();
var BusinessContactSelectSchema_default = BusinessContactSelectSchema;



exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.default = BusinessContactSelectSchema_default;
//# sourceMappingURL=BusinessContactSelectSchema.cjs.map