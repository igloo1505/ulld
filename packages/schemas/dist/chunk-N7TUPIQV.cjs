"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var RandomImageScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  path: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var RandomImageScalarWhereWithAggregatesInputSchema_default = RandomImageScalarWhereWithAggregatesInputSchema;




exports.RandomImageScalarWhereWithAggregatesInputSchema = RandomImageScalarWhereWithAggregatesInputSchema; exports.RandomImageScalarWhereWithAggregatesInputSchema_default = RandomImageScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-N7TUPIQV.cjs.map