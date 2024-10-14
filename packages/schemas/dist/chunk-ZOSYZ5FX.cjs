"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/RandomImageWhereInputSchema.ts
var _zod = require('zod');
var RandomImageWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RandomImageWhereInputSchema), _zod.z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RandomImageWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RandomImageWhereInputSchema), _zod.z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  path: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var RandomImageWhereInputSchema_default = RandomImageWhereInputSchema;




exports.RandomImageWhereInputSchema = RandomImageWhereInputSchema; exports.RandomImageWhereInputSchema_default = RandomImageWhereInputSchema_default;
//# sourceMappingURL=chunk-ZOSYZ5FX.cjs.map