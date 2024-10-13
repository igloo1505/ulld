"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ReadingListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema;




exports.ReadingListScalarWhereWithAggregatesInputSchema = ReadingListScalarWhereWithAggregatesInputSchema; exports.ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-6D7E6LNE.cjs.map