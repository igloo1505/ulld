"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/SnippetWhereInputSchema.ts
var _zod = require('zod');
var SnippetWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SnippetWhereInputSchema), _zod.z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SnippetWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SnippetWhereInputSchema), _zod.z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SnippetWhereInputSchema_default = SnippetWhereInputSchema;




exports.SnippetWhereInputSchema = SnippetWhereInputSchema; exports.SnippetWhereInputSchema_default = SnippetWhereInputSchema_default;
//# sourceMappingURL=chunk-54IZ6RTN.cjs.map