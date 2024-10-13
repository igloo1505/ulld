"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRUDL6TOUcjs = require('./chunk-RUDL6TOU.cjs');


var _chunkCNWMD46Ccjs = require('./chunk-CNWMD46C.cjs');


var _chunkZR7LYAPFcjs = require('./chunk-ZR7LYAPF.cjs');

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
  data: _zod.z.union([_chunkRUDL6TOUcjs.BusinessContactUpdateInputSchema, _chunkCNWMD46Ccjs.BusinessContactUncheckedUpdateInputSchema]),
  where: _chunkZR7LYAPFcjs.BusinessContactWhereUniqueInputSchema
}).strict();
var BusinessContactUpdateArgsSchema_default = BusinessContactUpdateArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactUpdateArgsSchema = BusinessContactUpdateArgsSchema; exports.BusinessContactUpdateArgsSchema_default = BusinessContactUpdateArgsSchema_default;
//# sourceMappingURL=chunk-I4KZP5UT.cjs.map