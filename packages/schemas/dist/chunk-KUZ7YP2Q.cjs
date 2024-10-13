"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/WhiteboardWhereInputSchema.ts
var _zod = require('zod');
var WhiteboardWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WhiteboardWhereInputSchema), _zod.z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WhiteboardWhereInputSchema), _zod.z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var WhiteboardWhereInputSchema_default = WhiteboardWhereInputSchema;




exports.WhiteboardWhereInputSchema = WhiteboardWhereInputSchema; exports.WhiteboardWhereInputSchema_default = WhiteboardWhereInputSchema_default;
//# sourceMappingURL=chunk-KUZ7YP2Q.cjs.map