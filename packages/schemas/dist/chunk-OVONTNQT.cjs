"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsAppendixMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SettingsAppendixMaxOrderByAggregateInputSchema_default = SettingsAppendixMaxOrderByAggregateInputSchema;




exports.SettingsAppendixMaxOrderByAggregateInputSchema = SettingsAppendixMaxOrderByAggregateInputSchema; exports.SettingsAppendixMaxOrderByAggregateInputSchema_default = SettingsAppendixMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OVONTNQT.cjs.map