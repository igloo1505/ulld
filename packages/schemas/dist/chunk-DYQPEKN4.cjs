"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SnippetScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SnippetScalarWhereWithAggregatesInputSchema_default = SnippetScalarWhereWithAggregatesInputSchema;




exports.SnippetScalarWhereWithAggregatesInputSchema = SnippetScalarWhereWithAggregatesInputSchema; exports.SnippetScalarWhereWithAggregatesInputSchema_default = SnippetScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-DYQPEKN4.cjs.map