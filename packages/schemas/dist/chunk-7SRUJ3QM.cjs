"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCJEWO34Pcjs = require('./chunk-CJEWO34P.cjs');


var _chunkFWHQZDQQcjs = require('./chunk-FWHQZDQQ.cjs');

// src/database/inputTypeSchemas/FeatureRequestCreateManyInputSchema.ts
var _zod = require('zod');
var FeatureRequestCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  email: _zod.z.string(),
  message: _zod.z.string(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkCJEWO34Pcjs.FeatureRequestCreatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkFWHQZDQQcjs.FeatureRequestCreateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.coerce.date().optional()
}).strict();
var FeatureRequestCreateManyInputSchema_default = FeatureRequestCreateManyInputSchema;




exports.FeatureRequestCreateManyInputSchema = FeatureRequestCreateManyInputSchema; exports.FeatureRequestCreateManyInputSchema_default = FeatureRequestCreateManyInputSchema_default;
//# sourceMappingURL=chunk-7SRUJ3QM.cjs.map