"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/SnippetScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SnippetScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SnippetScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SnippetScalarWhereWithAggregatesInputSchema_default = SnippetScalarWhereWithAggregatesInputSchema;




exports.SnippetScalarWhereWithAggregatesInputSchema = SnippetScalarWhereWithAggregatesInputSchema; exports.SnippetScalarWhereWithAggregatesInputSchema_default = SnippetScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-4BKDHWOK.cjs.map