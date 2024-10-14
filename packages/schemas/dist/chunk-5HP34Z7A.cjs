"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMB3XNPS2cjs = require('./chunk-MB3XNPS2.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/WhiteboardUpdateInputSchema.ts
var _zod = require('zod');
var WhiteboardUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  data: _zod.z.union([_zod.z.instanceof(Buffer), _zod.z.lazy(() => _chunkMB3XNPS2cjs.BytesFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WhiteboardUpdateInputSchema_default = WhiteboardUpdateInputSchema;




exports.WhiteboardUpdateInputSchema = WhiteboardUpdateInputSchema; exports.WhiteboardUpdateInputSchema_default = WhiteboardUpdateInputSchema_default;
//# sourceMappingURL=chunk-5HP34Z7A.cjs.map