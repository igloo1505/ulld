"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DailyFocusWhereInputSchema.ts
var _zod = require('zod');
var DailyFocusWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DailyFocusWhereInputSchema), _zod.z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DailyFocusWhereInputSchema), _zod.z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DailyFocusWhereInputSchema_default = DailyFocusWhereInputSchema;




exports.DailyFocusWhereInputSchema = DailyFocusWhereInputSchema; exports.DailyFocusWhereInputSchema_default = DailyFocusWhereInputSchema_default;
//# sourceMappingURL=chunk-EEBSLQOJ.cjs.map