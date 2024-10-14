"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRYYFOCC5cjs = require('./chunk-RYYFOCC5.cjs');


var _chunkEL3ISCUZcjs = require('./chunk-EL3ISCUZ.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var FeatureRequestUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  email: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  message: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkEL3ISCUZcjs.FeatureRequestUpdatecategoryInputSchema), _zod.z.string().array()]).optional(),
  userBase: _zod.z.union([_zod.z.lazy(() => _chunkRYYFOCC5cjs.FeatureRequestUpdateuserBaseInputSchema), _zod.z.string().array()]).optional(),
  receivedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUncheckedUpdateManyInputSchema_default = FeatureRequestUncheckedUpdateManyInputSchema;




exports.FeatureRequestUncheckedUpdateManyInputSchema = FeatureRequestUncheckedUpdateManyInputSchema; exports.FeatureRequestUncheckedUpdateManyInputSchema_default = FeatureRequestUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-6UZKLIGP.cjs.map