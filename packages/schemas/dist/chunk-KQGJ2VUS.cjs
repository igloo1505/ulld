"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/TagScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var TagScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TagScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TagScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var TagScalarWhereWithAggregatesInputSchema_default = TagScalarWhereWithAggregatesInputSchema;




exports.TagScalarWhereWithAggregatesInputSchema = TagScalarWhereWithAggregatesInputSchema; exports.TagScalarWhereWithAggregatesInputSchema_default = TagScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-KQGJ2VUS.cjs.map