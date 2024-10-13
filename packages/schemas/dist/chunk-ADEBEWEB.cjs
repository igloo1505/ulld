"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var BibScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => BibScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  filename: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var BibScalarWhereWithAggregatesInputSchema_default = BibScalarWhereWithAggregatesInputSchema;




exports.BibScalarWhereWithAggregatesInputSchema = BibScalarWhereWithAggregatesInputSchema; exports.BibScalarWhereWithAggregatesInputSchema_default = BibScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-ADEBEWEB.cjs.map