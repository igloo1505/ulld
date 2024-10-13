"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BusinessContactCreateManyInputSchema.ts
var _zod = require('zod');
var BusinessContactCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  companyName: _zod.z.string(),
  contactName: _zod.z.string(),
  contactPreference: _zod.z.string(),
  email: _zod.z.string().optional().nullable(),
  phone: _zod.z.string().optional().nullable(),
  message: _zod.z.string(),
  purpose: _zod.z.string().optional().nullable()
}).strict();
var BusinessContactCreateManyInputSchema_default = BusinessContactCreateManyInputSchema;




exports.BusinessContactCreateManyInputSchema = BusinessContactCreateManyInputSchema; exports.BusinessContactCreateManyInputSchema_default = BusinessContactCreateManyInputSchema_default;
//# sourceMappingURL=chunk-POADIYVI.cjs.map