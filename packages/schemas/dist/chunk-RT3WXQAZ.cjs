"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/WhiteboardWhereInputSchema.ts
var _zod = require('zod');
var WhiteboardWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WhiteboardWhereInputSchema), _zod.z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WhiteboardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WhiteboardWhereInputSchema), _zod.z.lazy(() => WhiteboardWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var WhiteboardWhereInputSchema_default = WhiteboardWhereInputSchema;




exports.WhiteboardWhereInputSchema = WhiteboardWhereInputSchema; exports.WhiteboardWhereInputSchema_default = WhiteboardWhereInputSchema_default;
//# sourceMappingURL=chunk-RT3WXQAZ.cjs.map