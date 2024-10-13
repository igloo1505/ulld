"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DJTUpdateInputSchema.ts
var _zod = require('zod');
var DJTUpdateInputSchema = _zod.z.object({
  type: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUpdateInputSchema_default = DJTUpdateInputSchema;




exports.DJTUpdateInputSchema = DJTUpdateInputSchema; exports.DJTUpdateInputSchema_default = DJTUpdateInputSchema_default;
//# sourceMappingURL=chunk-YQACXE42.cjs.map