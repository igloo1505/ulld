"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTQEO4GCGcjs = require('./chunk-TQEO4GCG.cjs');

// src/database/outputTypeSchemas/BusinessContactFindUniqueArgsSchema.ts
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
var BusinessContactFindUniqueArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  where: _chunkTQEO4GCGcjs.BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactFindUniqueArgsSchema_default = BusinessContactFindUniqueArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactFindUniqueArgsSchema = BusinessContactFindUniqueArgsSchema; exports.BusinessContactFindUniqueArgsSchema_default = BusinessContactFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-2KGKNZAC.cjs.map