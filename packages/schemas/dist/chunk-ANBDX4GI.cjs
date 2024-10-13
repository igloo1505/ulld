"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5S7O3Q5Xcjs = require('./chunk-5S7O3Q5X.cjs');

// src/database/outputTypeSchemas/FeatureRequestDeleteArgsSchema.ts
var _zod = require('zod');
var FeatureRequestSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  email: _zod.z.boolean().optional(),
  message: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  userBase: _zod.z.boolean().optional(),
  receivedOn: _zod.z.boolean().optional()
}).strict();
var FeatureRequestDeleteArgsSchema = _zod.z.object({
  select: FeatureRequestSelectSchema.optional(),
  where: _chunk5S7O3Q5Xcjs.FeatureRequestWhereUniqueInputSchema
}).strict();
var FeatureRequestDeleteArgsSchema_default = FeatureRequestDeleteArgsSchema;





exports.FeatureRequestSelectSchema = FeatureRequestSelectSchema; exports.FeatureRequestDeleteArgsSchema = FeatureRequestDeleteArgsSchema; exports.FeatureRequestDeleteArgsSchema_default = FeatureRequestDeleteArgsSchema_default;
//# sourceMappingURL=chunk-ANBDX4GI.cjs.map