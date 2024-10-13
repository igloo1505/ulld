"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DJTUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var DJTUpdateManyMutationInputSchema = _zod.z.object({
  type: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DJTUpdateManyMutationInputSchema_default = DJTUpdateManyMutationInputSchema;




exports.DJTUpdateManyMutationInputSchema = DJTUpdateManyMutationInputSchema; exports.DJTUpdateManyMutationInputSchema_default = DJTUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-H55OC673.cjs.map