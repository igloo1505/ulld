"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNTUQUDWRcjs = require('./chunk-NTUQUDWR.cjs');


var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/SnippetWhereUniqueInputSchema.ts
var _zod = require('zod');
var SnippetWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkNTUQUDWRcjs.SnippetWhereInputSchema), _zod.z.lazy(() => _chunkNTUQUDWRcjs.SnippetWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkNTUQUDWRcjs.SnippetWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkNTUQUDWRcjs.SnippetWhereInputSchema), _zod.z.lazy(() => _chunkNTUQUDWRcjs.SnippetWhereInputSchema).array()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var SnippetWhereUniqueInputSchema_default = SnippetWhereUniqueInputSchema;




exports.SnippetWhereUniqueInputSchema = SnippetWhereUniqueInputSchema; exports.SnippetWhereUniqueInputSchema_default = SnippetWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-F356JBCI.cjs.map