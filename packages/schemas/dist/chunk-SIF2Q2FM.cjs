"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKUZ7YP2Qcjs = require('./chunk-KUZ7YP2Q.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');

// src/database/inputTypeSchemas/WhiteboardWhereUniqueInputSchema.ts
var _zod = require('zod');
var WhiteboardWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema), _zod.z.lazy(() => _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema), _zod.z.lazy(() => _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema).array()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict());
var WhiteboardWhereUniqueInputSchema_default = WhiteboardWhereUniqueInputSchema;




exports.WhiteboardWhereUniqueInputSchema = WhiteboardWhereUniqueInputSchema; exports.WhiteboardWhereUniqueInputSchema_default = WhiteboardWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-SIF2Q2FM.cjs.map