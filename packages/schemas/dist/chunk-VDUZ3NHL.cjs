"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/QuoteWhereInputSchema.ts
var _zod = require('zod');
var QuoteWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QuoteWhereInputSchema), _zod.z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QuoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QuoteWhereInputSchema), _zod.z.lazy(() => QuoteWhereInputSchema).array()]).optional(),
  body: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  author: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var QuoteWhereInputSchema_default = QuoteWhereInputSchema;




exports.QuoteWhereInputSchema = QuoteWhereInputSchema; exports.QuoteWhereInputSchema_default = QuoteWhereInputSchema_default;
//# sourceMappingURL=chunk-VDUZ3NHL.cjs.map