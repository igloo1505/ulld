"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCJEWO34Pcjs = require('./chunk-CJEWO34P.cjs');


var _chunkFWHQZDQQcjs = require('./chunk-FWHQZDQQ.cjs');

// src/database/inputTypeSchemas/FeatureRequestCreateInputSchema.ts
var _zod = require('zod');
var FeatureRequestCreateInputSchema = _zod.z.object({
  email: _zod.z.string(),
  message: _zod.z.string(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkCJEWO34Pcjs.FeatureRequestCreatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkFWHQZDQQcjs.FeatureRequestCreateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.coerce.date().optional()
}).strict();
var FeatureRequestCreateInputSchema_default = FeatureRequestCreateInputSchema;




exports.FeatureRequestCreateInputSchema = FeatureRequestCreateInputSchema; exports.FeatureRequestCreateInputSchema_default = FeatureRequestCreateInputSchema_default;
//# sourceMappingURL=chunk-QQZKNDAY.cjs.map