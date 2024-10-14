"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZOSYZ5FXcjs = require('./chunk-ZOSYZ5FX.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/RandomImageWhereUniqueInputSchema.ts
var _zod = require('zod');
var RandomImageWhereUniqueInputSchema = _zod.z.object({
  path: _zod.z.string()
}).and(_zod.z.object({
  path: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema), _zod.z.lazy(() => _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema), _zod.z.lazy(() => _chunkZOSYZ5FXcjs.RandomImageWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var RandomImageWhereUniqueInputSchema_default = RandomImageWhereUniqueInputSchema;




exports.RandomImageWhereUniqueInputSchema = RandomImageWhereUniqueInputSchema; exports.RandomImageWhereUniqueInputSchema_default = RandomImageWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-55E4S4FL.cjs.map