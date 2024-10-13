"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/BusinessContactSchema.ts
var _zod = require('zod');
var BusinessContactSchema = _zod.z.object({
  id: _zod.z.number().int(),
  companyName: _zod.z.string(),
  contactName: _zod.z.string(),
  contactPreference: _zod.z.string(),
  email: _zod.z.string().nullable(),
  phone: _zod.z.string().nullable(),
  message: _zod.z.string(),
  purpose: _zod.z.string().nullable()
});
var BusinessContactPartialSchema = BusinessContactSchema.partial();
var BusinessContactSchema_default = BusinessContactSchema;





exports.BusinessContactSchema = BusinessContactSchema; exports.BusinessContactPartialSchema = BusinessContactPartialSchema; exports.BusinessContactSchema_default = BusinessContactSchema_default;
//# sourceMappingURL=chunk-QKZW4A2Y.cjs.map