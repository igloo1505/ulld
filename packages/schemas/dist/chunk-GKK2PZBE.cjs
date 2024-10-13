"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBCDQVT7Ocjs = require('./chunk-BCDQVT7O.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/SubjectScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SubjectScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SubjectScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkBCDQVT7Ocjs.IntNullableWithAggregatesFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SubjectScalarWhereWithAggregatesInputSchema_default = SubjectScalarWhereWithAggregatesInputSchema;




exports.SubjectScalarWhereWithAggregatesInputSchema = SubjectScalarWhereWithAggregatesInputSchema; exports.SubjectScalarWhereWithAggregatesInputSchema_default = SubjectScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-GKK2PZBE.cjs.map