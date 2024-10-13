"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZR7LYAPFcjs = require('./chunk-ZR7LYAPF.cjs');

// src/database/outputTypeSchemas/BusinessContactFindUniqueOrThrowArgsSchema.ts
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
var BusinessContactFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  where: _chunkZR7LYAPFcjs.BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactFindUniqueOrThrowArgsSchema_default = BusinessContactFindUniqueOrThrowArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactFindUniqueOrThrowArgsSchema = BusinessContactFindUniqueOrThrowArgsSchema; exports.BusinessContactFindUniqueOrThrowArgsSchema_default = BusinessContactFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-XDI2BKXM.cjs.map