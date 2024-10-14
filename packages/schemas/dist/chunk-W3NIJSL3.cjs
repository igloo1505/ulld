"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/ReadingListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var ReadingListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => ReadingListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema;




exports.ReadingListScalarWhereWithAggregatesInputSchema = ReadingListScalarWhereWithAggregatesInputSchema; exports.ReadingListScalarWhereWithAggregatesInputSchema_default = ReadingListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-W3NIJSL3.cjs.map