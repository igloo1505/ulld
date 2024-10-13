"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVYYZSYF5cjs = require('./chunk-VYYZSYF5.cjs');


var _chunkJKV2YZP7cjs = require('./chunk-JKV2YZP7.cjs');


var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var WaitlistRequestScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunkJKV2YZP7cjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkVYYZSYF5cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var WaitlistRequestScalarWhereWithAggregatesInputSchema_default = WaitlistRequestScalarWhereWithAggregatesInputSchema;




exports.WaitlistRequestScalarWhereWithAggregatesInputSchema = WaitlistRequestScalarWhereWithAggregatesInputSchema; exports.WaitlistRequestScalarWhereWithAggregatesInputSchema_default = WaitlistRequestScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-4ODIUHCJ.cjs.map