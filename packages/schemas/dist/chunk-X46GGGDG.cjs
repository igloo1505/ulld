"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5SSTWBRMcjs = require('./chunk-5SSTWBRM.cjs');


var _chunkIEB3LIY7cjs = require('./chunk-IEB3LIY7.cjs');


var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');

// src/database/inputTypeSchemas/TimePeriodScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var TimePeriodScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => TimePeriodScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk5SSTWBRMcjs.DateTimeNullableWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkIEB3LIY7cjs.StringNullableWithAggregatesFilterSchema), _zod.z.string()]).optional().nullable()
}).strict();
var TimePeriodScalarWhereWithAggregatesInputSchema_default = TimePeriodScalarWhereWithAggregatesInputSchema;




exports.TimePeriodScalarWhereWithAggregatesInputSchema = TimePeriodScalarWhereWithAggregatesInputSchema; exports.TimePeriodScalarWhereWithAggregatesInputSchema_default = TimePeriodScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-X46GGGDG.cjs.map