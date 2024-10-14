"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/DailyFocusScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var DailyFocusScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => DailyFocusScalarWhereWithAggregatesInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DailyFocusScalarWhereWithAggregatesInputSchema_default = DailyFocusScalarWhereWithAggregatesInputSchema;




exports.DailyFocusScalarWhereWithAggregatesInputSchema = DailyFocusScalarWhereWithAggregatesInputSchema; exports.DailyFocusScalarWhereWithAggregatesInputSchema_default = DailyFocusScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-AZWT5CPW.cjs.map