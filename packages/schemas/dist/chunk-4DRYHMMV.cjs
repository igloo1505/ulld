"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingMaxOrderByAggregateInputSchema_default = AutoSettingMaxOrderByAggregateInputSchema;




exports.AutoSettingMaxOrderByAggregateInputSchema = AutoSettingMaxOrderByAggregateInputSchema; exports.AutoSettingMaxOrderByAggregateInputSchema_default = AutoSettingMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4DRYHMMV.cjs.map