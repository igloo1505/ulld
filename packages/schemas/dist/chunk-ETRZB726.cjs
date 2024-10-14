"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRT3WXQAZcjs = require('./chunk-RT3WXQAZ.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');

// src/database/inputTypeSchemas/WhiteboardWhereUniqueInputSchema.ts
var _zod = require('zod');
var WhiteboardWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema), _zod.z.lazy(() => _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema), _zod.z.lazy(() => _chunkRT3WXQAZcjs.WhiteboardWhereInputSchema).array()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict());
var WhiteboardWhereUniqueInputSchema_default = WhiteboardWhereUniqueInputSchema;




exports.WhiteboardWhereUniqueInputSchema = WhiteboardWhereUniqueInputSchema; exports.WhiteboardWhereUniqueInputSchema_default = WhiteboardWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-ETRZB726.cjs.map