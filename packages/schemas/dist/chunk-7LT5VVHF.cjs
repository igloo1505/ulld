"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/DailyFocusWhereInputSchema.ts
var _zod = require('zod');
var DailyFocusWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DailyFocusWhereInputSchema), _zod.z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DailyFocusWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DailyFocusWhereInputSchema), _zod.z.lazy(() => DailyFocusWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var DailyFocusWhereInputSchema_default = DailyFocusWhereInputSchema;




exports.DailyFocusWhereInputSchema = DailyFocusWhereInputSchema; exports.DailyFocusWhereInputSchema_default = DailyFocusWhereInputSchema_default;
//# sourceMappingURL=chunk-7LT5VVHF.cjs.map