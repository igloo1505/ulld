"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/BibWhereUniqueInputSchema.ts
var _zod = require('zod');
var BibWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.number().int()
}).and(_zod.z.object({
  id: _zod.z.number().int().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema), _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibWhereInputSchema).array()]).optional(),
  filename: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  entries: _zod.z.lazy(() => _chunkUNUMUJ42cjs.BibEntryListRelationFilterSchema).optional()
}).strict());
var BibWhereUniqueInputSchema_default = BibWhereUniqueInputSchema;




exports.BibWhereUniqueInputSchema = BibWhereUniqueInputSchema; exports.BibWhereUniqueInputSchema_default = BibWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-M2TTZGTP.cjs.map