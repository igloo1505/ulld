"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunkMB3XNPS2cjs = require('./chunk-MB3XNPS2.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/DJTUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var DJTUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  type: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkMB3XNPS2cjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUncheckedUpdateManyInputSchema_default = DJTUncheckedUpdateManyInputSchema;




exports.DJTUncheckedUpdateManyInputSchema = DJTUncheckedUpdateManyInputSchema; exports.DJTUncheckedUpdateManyInputSchema_default = DJTUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-OVLFGP6W.cjs.map