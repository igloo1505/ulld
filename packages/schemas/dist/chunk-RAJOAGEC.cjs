"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SettingsMinOrderByAggregateInputSchema_default = SettingsMinOrderByAggregateInputSchema;




exports.SettingsMinOrderByAggregateInputSchema = SettingsMinOrderByAggregateInputSchema; exports.SettingsMinOrderByAggregateInputSchema_default = SettingsMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-RAJOAGEC.cjs.map