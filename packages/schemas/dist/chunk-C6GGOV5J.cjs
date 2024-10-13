"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7LT5VVHFcjs = require('./chunk-7LT5VVHF.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');

// src/database/inputTypeSchemas/DailyFocusWhereUniqueInputSchema.ts
var _zod = require('zod');
var DailyFocusWhereUniqueInputSchema = _zod.z.object({
  value: _zod.z.string()
}).and(_zod.z.object({
  value: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema), _zod.z.lazy(() => _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema), _zod.z.lazy(() => _chunk7LT5VVHFcjs.DailyFocusWhereInputSchema).array()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var DailyFocusWhereUniqueInputSchema_default = DailyFocusWhereUniqueInputSchema;




exports.DailyFocusWhereUniqueInputSchema = DailyFocusWhereUniqueInputSchema; exports.DailyFocusWhereUniqueInputSchema_default = DailyFocusWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-C6GGOV5J.cjs.map