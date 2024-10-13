"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWRAIJPWAcjs = require('./chunk-WRAIJPWA.cjs');


var _chunkQFSZWMU6cjs = require('./chunk-QFSZWMU6.cjs');

// src/database/inputTypeSchemas/FeatureRequestCreateInputSchema.ts
var _zod = require('zod');
var FeatureRequestCreateInputSchema = _zod.z.object({
  email: _zod.z.string(),
  message: _zod.z.string(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkWRAIJPWAcjs.FeatureRequestCreatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkQFSZWMU6cjs.FeatureRequestCreateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.coerce.date().optional()
}).strict();
var FeatureRequestCreateInputSchema_default = FeatureRequestCreateInputSchema;




exports.FeatureRequestCreateInputSchema = FeatureRequestCreateInputSchema; exports.FeatureRequestCreateInputSchema_default = FeatureRequestCreateInputSchema_default;
//# sourceMappingURL=chunk-XRKLOI4Z.cjs.map