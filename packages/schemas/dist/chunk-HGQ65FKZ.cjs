"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSJDZOHPFcjs = require('./chunk-SJDZOHPF.cjs');


var _chunkDINFU7A7cjs = require('./chunk-DINFU7A7.cjs');


var _chunkRUDL6TOUcjs = require('./chunk-RUDL6TOU.cjs');


var _chunkCNWMD46Ccjs = require('./chunk-CNWMD46C.cjs');


var _chunkZR7LYAPFcjs = require('./chunk-ZR7LYAPF.cjs');

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
  where: _chunkZR7LYAPFcjs.BusinessContactWhereUniqueInputSchema,
  create: _zod.z.union([_chunkSJDZOHPFcjs.BusinessContactCreateInputSchema, _chunkDINFU7A7cjs.BusinessContactUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkRUDL6TOUcjs.BusinessContactUpdateInputSchema, _chunkCNWMD46Ccjs.BusinessContactUncheckedUpdateInputSchema])
}).strict();
var BusinessContactUpsertArgsSchema_default = BusinessContactUpsertArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactUpsertArgsSchema = BusinessContactUpsertArgsSchema; exports.BusinessContactUpsertArgsSchema_default = BusinessContactUpsertArgsSchema_default;
//# sourceMappingURL=chunk-HGQ65FKZ.cjs.map