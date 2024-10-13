"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/FeatureRequestSchema.ts
var _zod = require('zod');
var FeatureRequestSchema = _zod.z.object({
  id: _zod.z.number().int(),
  email: _zod.z.string(),
  message: _zod.z.string(),
  category: _zod.z.string().array(),
  userBase: _zod.z.string().array(),
  receivedOn: _zod.z.coerce.date()
});
var FeatureRequestPartialSchema = FeatureRequestSchema.partial();
var FeatureRequestSchema_default = FeatureRequestSchema;





exports.FeatureRequestSchema = FeatureRequestSchema; exports.FeatureRequestPartialSchema = FeatureRequestPartialSchema; exports.FeatureRequestSchema_default = FeatureRequestSchema_default;
//# sourceMappingURL=chunk-NLDHQGMX.cjs.map