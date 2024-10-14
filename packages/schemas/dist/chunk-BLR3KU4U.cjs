"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYSVCS7P6cjs = require('./chunk-YSVCS7P6.cjs');


var _chunk5AQUPIZWcjs = require('./chunk-5AQUPIZW.cjs');


var _chunkJNWYIEVVcjs = require('./chunk-JNWYIEVV.cjs');

// src/database/inputTypeSchemas/WaitlistRequestScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var WaitlistRequestScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => WaitlistRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkJNWYIEVVcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional(),
  receivedOn: _zod.z.union([_zod.z.lazy(() => _chunk5AQUPIZWcjs.DateTimeWithAggregatesFilterSchema), _zod.z.coerce.date()]).optional(),
  emailsSent: _zod.z.union([_zod.z.lazy(() => _chunkYSVCS7P6cjs.IntWithAggregatesFilterSchema), _zod.z.number()]).optional()
}).strict();
var WaitlistRequestScalarWhereWithAggregatesInputSchema_default = WaitlistRequestScalarWhereWithAggregatesInputSchema;




exports.WaitlistRequestScalarWhereWithAggregatesInputSchema = WaitlistRequestScalarWhereWithAggregatesInputSchema; exports.WaitlistRequestScalarWhereWithAggregatesInputSchema_default = WaitlistRequestScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-BLR3KU4U.cjs.map