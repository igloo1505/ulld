"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH5ECPOE5cjs = require('./chunk-H5ECPOE5.cjs');


var _chunkO35PUXLCcjs = require('./chunk-O35PUXLC.cjs');


var _chunkTQEO4GCGcjs = require('./chunk-TQEO4GCG.cjs');

// src/database/outputTypeSchemas/BusinessContactUpdateArgsSchema.ts
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
var BusinessContactUpdateArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  data: _zod.z.union([_chunkH5ECPOE5cjs.BusinessContactUpdateInputSchema, _chunkO35PUXLCcjs.BusinessContactUncheckedUpdateInputSchema]),
  where: _chunkTQEO4GCGcjs.BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactUpdateArgsSchema_default = BusinessContactUpdateArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactUpdateArgsSchema = BusinessContactUpdateArgsSchema; exports.BusinessContactUpdateArgsSchema_default = BusinessContactUpdateArgsSchema_default;
//# sourceMappingURL=chunk-EAYUXZGI.cjs.map