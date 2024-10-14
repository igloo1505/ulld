"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk24NZH6AAcjs = require('./chunk-24NZH6AA.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk24NZH6AAcjs.FeatureRequestOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk24NZH6AAcjs.FeatureRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var FeatureRequestOrderByRelevanceInputSchema_default = FeatureRequestOrderByRelevanceInputSchema;




exports.FeatureRequestOrderByRelevanceInputSchema = FeatureRequestOrderByRelevanceInputSchema; exports.FeatureRequestOrderByRelevanceInputSchema_default = FeatureRequestOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-FBZCD2B4.cjs.map