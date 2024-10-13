"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SettingsMinOrderByAggregateInputSchema_default = SettingsMinOrderByAggregateInputSchema;




exports.SettingsMinOrderByAggregateInputSchema = SettingsMinOrderByAggregateInputSchema; exports.SettingsMinOrderByAggregateInputSchema_default = SettingsMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4EWRRU5K.cjs.map