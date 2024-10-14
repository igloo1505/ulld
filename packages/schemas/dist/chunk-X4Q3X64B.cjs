"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCVJXV3K2cjs = require('./chunk-CVJXV3K2.cjs');


var _chunkROHNOAPScjs = require('./chunk-ROHNOAPS.cjs');


var _chunkH5ECPOE5cjs = require('./chunk-H5ECPOE5.cjs');


var _chunkO35PUXLCcjs = require('./chunk-O35PUXLC.cjs');


var _chunkTQEO4GCGcjs = require('./chunk-TQEO4GCG.cjs');

// src/database/outputTypeSchemas/BusinessContactUpsertArgsSchema.ts
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
var BusinessContactUpsertArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  where: _chunkTQEO4GCGcjs.BusinessContactWhereUniqueInputSchema,
  create: _zod.z.union([_chunkCVJXV3K2cjs.BusinessContactCreateInputSchema, _chunkROHNOAPScjs.BusinessContactUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkH5ECPOE5cjs.BusinessContactUpdateInputSchema, _chunkO35PUXLCcjs.BusinessContactUncheckedUpdateInputSchema])
}).strict();
var BusinessContactUpsertArgsSchema_default = BusinessContactUpsertArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactUpsertArgsSchema = BusinessContactUpsertArgsSchema; exports.BusinessContactUpsertArgsSchema_default = BusinessContactUpsertArgsSchema_default;
//# sourceMappingURL=chunk-X4Q3X64B.cjs.map