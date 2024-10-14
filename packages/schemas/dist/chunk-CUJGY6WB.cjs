"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEEBSLQOJcjs = require('./chunk-EEBSLQOJ.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');

// src/database/inputTypeSchemas/DailyFocusWhereUniqueInputSchema.ts
var _zod = require('zod');
var DailyFocusWhereUniqueInputSchema = _zod.z.object({
  value: _zod.z.string()
}).and(_zod.z.object({
  value: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema), _zod.z.lazy(() => _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema), _zod.z.lazy(() => _chunkEEBSLQOJcjs.DailyFocusWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var DailyFocusWhereUniqueInputSchema_default = DailyFocusWhereUniqueInputSchema;




exports.DailyFocusWhereUniqueInputSchema = DailyFocusWhereUniqueInputSchema; exports.DailyFocusWhereUniqueInputSchema_default = DailyFocusWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-CUJGY6WB.cjs.map