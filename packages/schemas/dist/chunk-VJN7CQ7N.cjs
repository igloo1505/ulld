"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJOPQFMDHcjs = require('./chunk-JOPQFMDH.cjs');


var _chunkDD6GKPAFcjs = require('./chunk-DD6GKPAF.cjs');


var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');

// src/database/inputTypeSchemas/TimePeriodScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var TimePeriodScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunkJOPQFMDHcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkDD6GKPAFcjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereWithAggregatesInputSchema_default = TimePeriodScalarWhereWithAggregatesInputSchema;




exports.TimePeriodScalarWhereWithAggregatesInputSchema = TimePeriodScalarWhereWithAggregatesInputSchema; exports.TimePeriodScalarWhereWithAggregatesInputSchema_default = TimePeriodScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-VJN7CQ7N.cjs.map