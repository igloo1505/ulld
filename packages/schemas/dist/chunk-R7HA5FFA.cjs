"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingMinOrderByAggregateInputSchema_default = AutoSettingMinOrderByAggregateInputSchema;




exports.AutoSettingMinOrderByAggregateInputSchema = AutoSettingMinOrderByAggregateInputSchema; exports.AutoSettingMinOrderByAggregateInputSchema_default = AutoSettingMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-R7HA5FFA.cjs.map