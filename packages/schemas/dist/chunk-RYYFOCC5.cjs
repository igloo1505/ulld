"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/FeatureRequestUpdateuserBaseInputSchema.ts
var _zod = require('zod');
var FeatureRequestUpdateuserBaseInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var FeatureRequestUpdateuserBaseInputSchema_default = FeatureRequestUpdateuserBaseInputSchema;




exports.FeatureRequestUpdateuserBaseInputSchema = FeatureRequestUpdateuserBaseInputSchema; exports.FeatureRequestUpdateuserBaseInputSchema_default = FeatureRequestUpdateuserBaseInputSchema_default;
//# sourceMappingURL=chunk-RYYFOCC5.cjs.map