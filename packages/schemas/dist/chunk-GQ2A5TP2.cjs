"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCVJXV3K2cjs = require('./chunk-CVJXV3K2.cjs');


var _chunkROHNOAPScjs = require('./chunk-ROHNOAPS.cjs');

// src/database/outputTypeSchemas/BusinessContactCreateArgsSchema.ts
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
var BusinessContactCreateArgsSchema = _zod.z.object({
  select: BusinessContactSelectSchema.optional(),
  data: _zod.z.union([_chunkCVJXV3K2cjs.BusinessContactCreateInputSchema, _chunkROHNOAPScjs.BusinessContactUncheckedCreateInputSchema])
}).strict();
var BusinessContactCreateArgsSchema_default = BusinessContactCreateArgsSchema;





exports.BusinessContactSelectSchema = BusinessContactSelectSchema; exports.BusinessContactCreateArgsSchema = BusinessContactCreateArgsSchema; exports.BusinessContactCreateArgsSchema_default = BusinessContactCreateArgsSchema_default;
//# sourceMappingURL=chunk-GQ2A5TP2.cjs.map