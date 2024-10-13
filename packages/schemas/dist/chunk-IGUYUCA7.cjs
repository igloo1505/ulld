"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDU6Q65UHcjs = require('./chunk-DU6Q65UH.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkDU6Q65UHcjs.FeatureRequestOrderByRelevanceInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithRelationInputSchema_default = FeatureRequestOrderByWithRelationInputSchema;




exports.FeatureRequestOrderByWithRelationInputSchema = FeatureRequestOrderByWithRelationInputSchema; exports.FeatureRequestOrderByWithRelationInputSchema_default = FeatureRequestOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-IGUYUCA7.cjs.map