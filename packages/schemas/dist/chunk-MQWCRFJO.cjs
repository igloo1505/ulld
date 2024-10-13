"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQMTU7IZCcjs = require('./chunk-QMTU7IZC.cjs');


var _chunkKRDQXIG5cjs = require('./chunk-KRDQXIG5.cjs');


var _chunkZR7LYAPFcjs = require('./chunk-ZR7LYAPF.cjs');


var _chunk4FYHHISDcjs = require('./chunk-4FYHHISD.cjs');

// src/database/outputTypeSchemas/BusinessContactFindFirstOrThrowArgsSchema.ts
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
var BusinessContactFindFirstOrThrowArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  where: _chunk4FYHHISDcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQMTU7IZCcjs.BusinessContactOrderByWithRelationInputSchema.array(), _chunkQMTU7IZCcjs.BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkZR7LYAPFcjs.BusinessContactWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkKRDQXIG5cjs.BusinessContactScalarFieldEnumSchema, _chunkKRDQXIG5cjs.BusinessContactScalarFieldEnumSchema.array()]).optional()
}).strict();
var BusinessContactFindFirstOrThrowArgsSchema_default = BusinessContactFindFirstOrThrowArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactFindFirstOrThrowArgsSchema = BusinessContactFindFirstOrThrowArgsSchema; exports.BusinessContactFindFirstOrThrowArgsSchema_default = BusinessContactFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-MQWCRFJO.cjs.map