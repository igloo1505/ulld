"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWRAIJPWAcjs = require('./chunk-WRAIJPWA.cjs');


var _chunkQFSZWMU6cjs = require('./chunk-QFSZWMU6.cjs');

// src/database/inputTypeSchemas/FeatureRequestUncheckedCreateInputSchema.ts
var _zod = require('zod');
var FeatureRequestUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  email: _zod.z.string(),
  message: _zod.z.string(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkWRAIJPWAcjs.FeatureRequestCreatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkQFSZWMU6cjs.FeatureRequestCreateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.coerce.date().optional()
}).strict();
var FeatureRequestUncheckedCreateInputSchema_default = FeatureRequestUncheckedCreateInputSchema;




exports.FeatureRequestUncheckedCreateInputSchema = FeatureRequestUncheckedCreateInputSchema; exports.FeatureRequestUncheckedCreateInputSchema_default = FeatureRequestUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-4QFVNCKZ.cjs.map