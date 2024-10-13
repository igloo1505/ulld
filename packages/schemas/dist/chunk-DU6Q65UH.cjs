"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZHTP5CNAcjs = require('./chunk-ZHTP5CNA.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkZHTP5CNAcjs.FeatureRequestOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkZHTP5CNAcjs.FeatureRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var FeatureRequestOrderByRelevanceInputSchema_default = FeatureRequestOrderByRelevanceInputSchema;




exports.FeatureRequestOrderByRelevanceInputSchema = FeatureRequestOrderByRelevanceInputSchema; exports.FeatureRequestOrderByRelevanceInputSchema_default = FeatureRequestOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-DU6Q65UH.cjs.map