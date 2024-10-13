"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/WhiteboardUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var WhiteboardUpdateManyMutationInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUpdateManyMutationInputSchema_default = WhiteboardUpdateManyMutationInputSchema;




exports.WhiteboardUpdateManyMutationInputSchema = WhiteboardUpdateManyMutationInputSchema; exports.WhiteboardUpdateManyMutationInputSchema_default = WhiteboardUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-ZQALRKR2.cjs.map