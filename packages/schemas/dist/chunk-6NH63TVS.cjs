"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DJTUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var DJTUncheckedUpdateManyInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  type: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUncheckedUpdateManyInputSchema_default = DJTUncheckedUpdateManyInputSchema;




exports.DJTUncheckedUpdateManyInputSchema = DJTUncheckedUpdateManyInputSchema; exports.DJTUncheckedUpdateManyInputSchema_default = DJTUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-6NH63TVS.cjs.map