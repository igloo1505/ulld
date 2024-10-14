"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ASRITDCcjs = require('./chunk-4ASRITDC.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/QuoteScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var QuoteScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => QuoteScalarWhereWithAggregatesInputSchema).array()]).optional(),
  body: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  author: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  pinned: _zod.z.union([_zod.z.lazy(() => _chunk4ASRITDCcjs.BoolWithAggregatesFilterSchema), _zod.z.boolean()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var QuoteScalarWhereWithAggregatesInputSchema_default = QuoteScalarWhereWithAggregatesInputSchema;




exports.QuoteScalarWhereWithAggregatesInputSchema = QuoteScalarWhereWithAggregatesInputSchema; exports.QuoteScalarWhereWithAggregatesInputSchema_default = QuoteScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-FD4SWBTR.cjs.map