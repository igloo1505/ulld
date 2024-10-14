"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BH3YSQCcjs = require('./chunk-2BH3YSQC.cjs');


var _chunk6CDV3VOJcjs = require('./chunk-6CDV3VOJ.cjs');


var _chunkTQEO4GCGcjs = require('./chunk-TQEO4GCG.cjs');


var _chunkIYNN3UKQcjs = require('./chunk-IYNN3UKQ.cjs');

// src/database/outputTypeSchemas/BusinessContactFindManyArgsSchema.ts
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
var BusinessContactFindManyArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  where: _chunkIYNN3UKQcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2BH3YSQCcjs.BusinessContactOrderByWithRelationInputSchema.array(), _chunk2BH3YSQCcjs.BusinessContactOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTQEO4GCGcjs.BusinessContactWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk6CDV3VOJcjs.BusinessContactScalarFieldEnumSchema, _chunk6CDV3VOJcjs.BusinessContactScalarFieldEnumSchema.array()]).optional()
}).strict();
var BusinessContactFindManyArgsSchema_default = BusinessContactFindManyArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactFindManyArgsSchema = BusinessContactFindManyArgsSchema; exports.BusinessContactFindManyArgsSchema_default = BusinessContactFindManyArgsSchema_default;
//# sourceMappingURL=chunk-U227TB4U.cjs.map