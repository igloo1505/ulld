"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pluginSettings: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SettingsCountOrderByAggregateInputSchema_default = SettingsCountOrderByAggregateInputSchema;




exports.SettingsCountOrderByAggregateInputSchema = SettingsCountOrderByAggregateInputSchema; exports.SettingsCountOrderByAggregateInputSchema_default = SettingsCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7B6KOHO2.cjs.map