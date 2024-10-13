"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLEMYJRAcjs = require('./chunk-JLEMYJRA.cjs');


var _chunkDMG3BD7Ecjs = require('./chunk-DMG3BD7E.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/SnippetWhereInputSchema.ts
var _zod = require('zod');
var SnippetWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SnippetWhereInputSchema), _zod.z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SnippetWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SnippetWhereInputSchema), _zod.z.lazy(() => SnippetWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkDMG3BD7Ecjs.IntFilterSchema), _zod.z.number()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  keywords: _zod.z.lazy(() => _chunkJLEMYJRAcjs.StringNullableListFilterSchema).optional(),
  language: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SnippetWhereInputSchema_default = SnippetWhereInputSchema;




exports.SnippetWhereInputSchema = SnippetWhereInputSchema; exports.SnippetWhereInputSchema_default = SnippetWhereInputSchema_default;
//# sourceMappingURL=chunk-NTUQUDWR.cjs.map