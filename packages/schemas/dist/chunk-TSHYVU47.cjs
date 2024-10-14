"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRBHNELMPcjs = require('./chunk-RBHNELMP.cjs');


var _chunkQBRICRY5cjs = require('./chunk-QBRICRY5.cjs');


var _chunkHX5FCJZJcjs = require('./chunk-HX5FCJZJ.cjs');

// src/database/outputTypeSchemas/FeatureRequestUpdateArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestUpdateArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  data: _zod.z.union([_chunkRBHNELMPcjs.FeatureRequestUpdateInputSchema, _chunkQBRICRY5cjs.FeatureRequestUncheckedUpdateInputSchema]),
  where: _chunkHX5FCJZJcjs.FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestUpdateArgsSchema_default = FeatureRequestUpdateArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestUpdateArgsSchema = FeatureRequestUpdateArgsSchema; exports.FeatureRequestUpdateArgsSchema_default = FeatureRequestUpdateArgsSchema_default;
//# sourceMappingURL=chunk-TSHYVU47.cjs.map