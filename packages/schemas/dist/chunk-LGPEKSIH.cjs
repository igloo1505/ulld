"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/WhiteboardUpdateInputSchema.ts
var _zod = require('zod');
var WhiteboardUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUpdateInputSchema_default = WhiteboardUpdateInputSchema;




exports.WhiteboardUpdateInputSchema = WhiteboardUpdateInputSchema; exports.WhiteboardUpdateInputSchema_default = WhiteboardUpdateInputSchema_default;
//# sourceMappingURL=chunk-LGPEKSIH.cjs.map