"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOCF7NNPcjs = require('./chunk-EOCF7NNP.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/WhiteboardUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var WhiteboardUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkEOCF7NNPcjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUncheckedUpdateInputSchema_default = WhiteboardUncheckedUpdateInputSchema;




exports.WhiteboardUncheckedUpdateInputSchema = WhiteboardUncheckedUpdateInputSchema; exports.WhiteboardUncheckedUpdateInputSchema_default = WhiteboardUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-XT4THZ5I.cjs.map