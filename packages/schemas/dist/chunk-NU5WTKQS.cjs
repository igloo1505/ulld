"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsAppendixMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SettingsAppendixMinOrderByAggregateInputSchema_default = SettingsAppendixMinOrderByAggregateInputSchema;




exports.SettingsAppendixMinOrderByAggregateInputSchema = SettingsAppendixMinOrderByAggregateInputSchema; exports.SettingsAppendixMinOrderByAggregateInputSchema_default = SettingsAppendixMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NU5WTKQS.cjs.map