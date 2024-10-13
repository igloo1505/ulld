"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/RandomImageWhereInputSchema.ts
var _zod = require('zod');
var RandomImageWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RandomImageWhereInputSchema), _zod.z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RandomImageWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RandomImageWhereInputSchema), _zod.z.lazy(() => RandomImageWhereInputSchema).array()]).optional(),
  path: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var RandomImageWhereInputSchema_default = RandomImageWhereInputSchema;




exports.RandomImageWhereInputSchema = RandomImageWhereInputSchema; exports.RandomImageWhereInputSchema_default = RandomImageWhereInputSchema_default;
//# sourceMappingURL=chunk-H7ATQFXC.cjs.map