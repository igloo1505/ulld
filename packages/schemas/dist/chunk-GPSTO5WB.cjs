"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DailyFocusScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DailyFocusScalarWhereWithAggregatesInputSchema_default = DailyFocusScalarWhereWithAggregatesInputSchema;




exports.DailyFocusScalarWhereWithAggregatesInputSchema = DailyFocusScalarWhereWithAggregatesInputSchema; exports.DailyFocusScalarWhereWithAggregatesInputSchema_default = DailyFocusScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-GPSTO5WB.cjs.map