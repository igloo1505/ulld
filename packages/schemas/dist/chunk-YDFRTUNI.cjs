"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pluginSettings: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SettingsCountOrderByAggregateInputSchema_default = SettingsCountOrderByAggregateInputSchema;




exports.SettingsCountOrderByAggregateInputSchema = SettingsCountOrderByAggregateInputSchema; exports.SettingsCountOrderByAggregateInputSchema_default = SettingsCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YDFRTUNI.cjs.map