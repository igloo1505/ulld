"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/FeatureRequestUpdatecategoryInputSchema.ts
var _zod = require('zod');
var FeatureRequestUpdatecategoryInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var FeatureRequestUpdatecategoryInputSchema_default = FeatureRequestUpdatecategoryInputSchema;




exports.FeatureRequestUpdatecategoryInputSchema = FeatureRequestUpdatecategoryInputSchema; exports.FeatureRequestUpdatecategoryInputSchema_default = FeatureRequestUpdatecategoryInputSchema_default;
//# sourceMappingURL=chunk-Q6CN7OBR.cjs.map