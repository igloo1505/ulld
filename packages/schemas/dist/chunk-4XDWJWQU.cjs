"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4JWIYQZ6cjs = require('./chunk-4JWIYQZ6.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/QuoteScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var QuoteScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  body: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  author: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.lazy(() => _chunk4JWIYQZ6cjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var QuoteScalarWhereWithAggregatesInputSchema_default = QuoteScalarWhereWithAggregatesInputSchema;




exports.QuoteScalarWhereWithAggregatesInputSchema = QuoteScalarWhereWithAggregatesInputSchema; exports.QuoteScalarWhereWithAggregatesInputSchema_default = QuoteScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-4XDWJWQU.cjs.map