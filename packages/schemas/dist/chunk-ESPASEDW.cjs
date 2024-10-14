"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFBZCD2B4cjs = require('./chunk-FBZCD2B4.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var FeatureRequestOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkFBZCD2B4cjs.FeatureRequestOrderByRelevanceInputSchema).optional()
}).strict();
var FeatureRequestOrderByWithRelationInputSchema_default = FeatureRequestOrderByWithRelationInputSchema;




exports.FeatureRequestOrderByWithRelationInputSchema = FeatureRequestOrderByWithRelationInputSchema; exports.FeatureRequestOrderByWithRelationInputSchema_default = FeatureRequestOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-ESPASEDW.cjs.map