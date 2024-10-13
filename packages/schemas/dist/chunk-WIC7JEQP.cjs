"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DJTUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var DJTUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  type: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUncheckedUpdateInputSchema_default = DJTUncheckedUpdateInputSchema;




exports.DJTUncheckedUpdateInputSchema = DJTUncheckedUpdateInputSchema; exports.DJTUncheckedUpdateInputSchema_default = DJTUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-WIC7JEQP.cjs.map