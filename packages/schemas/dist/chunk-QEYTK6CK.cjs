"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK2VZ2PNWcjs = require('./chunk-K2VZ2PNW.cjs');


var _chunkYDFRTUNIcjs = require('./chunk-YDFRTUNI.cjs');


var _chunkR22AMLKFcjs = require('./chunk-R22AMLKF.cjs');


var _chunk4EWRRU5Kcjs = require('./chunk-4EWRRU5K.cjs');


var _chunkIQ2NELREcjs = require('./chunk-IQ2NELRE.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SettingsOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  pluginSettings: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkYDFRTUNIcjs.SettingsCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkR22AMLKFcjs.SettingsAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkK2VZ2PNWcjs.SettingsMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk4EWRRU5Kcjs.SettingsMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkIQ2NELREcjs.SettingsSumOrderByAggregateInputSchema).optional()
}).strict();
var SettingsOrderByWithAggregationInputSchema_default = SettingsOrderByWithAggregationInputSchema;




exports.SettingsOrderByWithAggregationInputSchema = SettingsOrderByWithAggregationInputSchema; exports.SettingsOrderByWithAggregationInputSchema_default = SettingsOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-QEYTK6CK.cjs.map