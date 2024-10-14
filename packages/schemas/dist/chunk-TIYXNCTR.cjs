"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNQYHFAMGcjs = require('./chunk-NQYHFAMG.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DJTWhereUniqueInputSchema.ts
var _zod = require('zod');
var DJTWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkNQYHFAMGcjs.DJTWhereInputSchema), _zod.z.lazy(() => _chunkNQYHFAMGcjs.DJTWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkNQYHFAMGcjs.DJTWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkNQYHFAMGcjs.DJTWhereInputSchema), _zod.z.lazy(() => _chunkNQYHFAMGcjs.DJTWhereInputSchema).array()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict());
var DJTWhereUniqueInputSchema_default = DJTWhereUniqueInputSchema;




exports.DJTWhereUniqueInputSchema = DJTWhereUniqueInputSchema; exports.DJTWhereUniqueInputSchema_default = DJTWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-TIYXNCTR.cjs.map