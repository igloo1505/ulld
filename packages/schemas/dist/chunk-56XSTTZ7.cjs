"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/RandomImageScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var RandomImageScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => RandomImageScalarWhereWithAggregatesInputSchema).array()]).optional(),
  path: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var RandomImageScalarWhereWithAggregatesInputSchema_default = RandomImageScalarWhereWithAggregatesInputSchema;




exports.RandomImageScalarWhereWithAggregatesInputSchema = RandomImageScalarWhereWithAggregatesInputSchema; exports.RandomImageScalarWhereWithAggregatesInputSchema_default = RandomImageScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-56XSTTZ7.cjs.map