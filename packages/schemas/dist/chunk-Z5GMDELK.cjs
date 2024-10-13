"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');

// src/database/outputTypeSchemas/FeatureRequestFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestFindUniqueOrThrowArgsSchema_default = FeatureRequestFindUniqueOrThrowArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestFindUniqueOrThrowArgsSchema = FeatureRequestFindUniqueOrThrowArgsSchema; exports.FeatureRequestFindUniqueOrThrowArgsSchema_default = FeatureRequestFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-Z5GMDELK.cjs.map