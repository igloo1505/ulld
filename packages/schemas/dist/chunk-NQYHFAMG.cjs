"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DJTWhereInputSchema.ts
var _zod = require('zod');
var DJTWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DJTWhereInputSchema), _zod.z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DJTWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DJTWhereInputSchema), _zod.z.lazy(() => DJTWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  type: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional()
}).strict();
var DJTWhereInputSchema_default = DJTWhereInputSchema;




exports.DJTWhereInputSchema = DJTWhereInputSchema; exports.DJTWhereInputSchema_default = DJTWhereInputSchema_default;
//# sourceMappingURL=chunk-NQYHFAMG.cjs.map