"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPWIKFJ5Zcjs = require('./chunk-PWIKFJ5Z.cjs');


var _chunkQ6CN7OBRcjs = require('./chunk-Q6CN7OBR.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/FeatureRequestUpdateInputSchema.ts
var _zod = require('zod');
var FeatureRequestUpdateInputSchema = _zod.z.object({
  email: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  message: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkQ6CN7OBRcjs.FeatureRequestUpdatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkPWIKFJ5Zcjs.FeatureRequestUpdateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUpdateInputSchema_default = FeatureRequestUpdateInputSchema;




exports.FeatureRequestUpdateInputSchema = FeatureRequestUpdateInputSchema; exports.FeatureRequestUpdateInputSchema_default = FeatureRequestUpdateInputSchema_default;
//# sourceMappingURL=chunk-AVMAGJJT.cjs.map