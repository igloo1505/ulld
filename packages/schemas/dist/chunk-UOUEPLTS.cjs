"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHX5FCJZJcjs = require('./chunk-HX5FCJZJ.cjs');

// src/database/outputTypeSchemas/FeatureRequestFindUniqueArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestFindUniqueArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunkHX5FCJZJcjs.FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestFindUniqueArgsSchema_default = FeatureRequestFindUniqueArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestFindUniqueArgsSchema = FeatureRequestFindUniqueArgsSchema; exports.FeatureRequestFindUniqueArgsSchema_default = FeatureRequestFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-UOUEPLTS.cjs.map