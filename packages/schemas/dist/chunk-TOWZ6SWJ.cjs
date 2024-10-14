"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIAY6MKSGcjs = require('./chunk-IAY6MKSG.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SettingsOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  tooltips: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showCitations: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary_showTags: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  landingImageAlign: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lockedLandingImage: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  cleanOnSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  plotTheme: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pluginSettings: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkIAY6MKSGcjs.SettingsOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsOrderByWithRelationInputSchema_default = SettingsOrderByWithRelationInputSchema;




exports.SettingsOrderByWithRelationInputSchema = SettingsOrderByWithRelationInputSchema; exports.SettingsOrderByWithRelationInputSchema_default = SettingsOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-TOWZ6SWJ.cjs.map