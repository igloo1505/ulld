"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BusinessContactUncheckedCreateInputSchema.ts
var _zod = require('zod');
var BusinessContactUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  companyName: _zod.z.string(),
  contactName: _zod.z.string(),
  contactPreference: _zod.z.string(),
  email: _zod.z.string().optional().nullable(),
  phone: _zod.z.string().optional().nullable(),
  message: _zod.z.string(),
  purpose: _zod.z.string().optional().nullable()
}).strict();
var BusinessContactUncheckedCreateInputSchema_default = BusinessContactUncheckedCreateInputSchema;




exports.BusinessContactUncheckedCreateInputSchema = BusinessContactUncheckedCreateInputSchema; exports.BusinessContactUncheckedCreateInputSchema_default = BusinessContactUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-ROHNOAPS.cjs.map