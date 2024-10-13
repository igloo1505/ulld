"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsMaxOrderByAggregateInputSchema = _zod.z.object({
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
var SettingsMaxOrderByAggregateInputSchema_default = SettingsMaxOrderByAggregateInputSchema;




exports.SettingsMaxOrderByAggregateInputSchema = SettingsMaxOrderByAggregateInputSchema; exports.SettingsMaxOrderByAggregateInputSchema_default = SettingsMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-K2VZ2PNW.cjs.map