"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTFJYHHWEcjs = require('./chunk-TFJYHHWE.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SettingsOrderByWithRelationInputSchema = _zod.z.object({
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
  _relevance: _zod.z.lazy(() => _chunkTFJYHHWEcjs.SettingsOrderByRelevanceInputSchema).optional()
}).strict();
var SettingsOrderByWithRelationInputSchema_default = SettingsOrderByWithRelationInputSchema;




exports.SettingsOrderByWithRelationInputSchema = SettingsOrderByWithRelationInputSchema; exports.SettingsOrderByWithRelationInputSchema_default = SettingsOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-D6EQVJUU.cjs.map