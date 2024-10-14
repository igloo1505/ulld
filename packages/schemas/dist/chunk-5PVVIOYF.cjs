"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk54IZ6RTNcjs = require('./chunk-54IZ6RTN.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/SnippetWhereUniqueInputSchema.ts
var _zod = require('zod');
var SnippetWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk54IZ6RTNcjs.SnippetWhereInputSchema), _zod.z.lazy(() => _chunk54IZ6RTNcjs.SnippetWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk54IZ6RTNcjs.SnippetWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk54IZ6RTNcjs.SnippetWhereInputSchema), _zod.z.lazy(() => _chunk54IZ6RTNcjs.SnippetWhereInputSchema).array()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var SnippetWhereUniqueInputSchema_default = SnippetWhereUniqueInputSchema;




exports.SnippetWhereUniqueInputSchema = SnippetWhereUniqueInputSchema; exports.SnippetWhereUniqueInputSchema_default = SnippetWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-5PVVIOYF.cjs.map