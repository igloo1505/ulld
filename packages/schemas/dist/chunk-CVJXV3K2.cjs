"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BusinessContactCreateInputSchema.ts
var _zod = require('zod');
var BusinessContactCreateInputSchema = _zod.z.object({
  companyName: _zod.z.string(),
  contactName: _zod.z.string(),
  contactPreference: _zod.z.string(),
  email: _zod.z.string().optional().nullable(),
  phone: _zod.z.string().optional().nullable(),
  message: _zod.z.string(),
  purpose: _zod.z.string().optional().nullable()
}).strict();
var BusinessContactCreateInputSchema_default = BusinessContactCreateInputSchema;




exports.BusinessContactCreateInputSchema = BusinessContactCreateInputSchema; exports.BusinessContactCreateInputSchema_default = BusinessContactCreateInputSchema_default;
//# sourceMappingURL=chunk-CVJXV3K2.cjs.map