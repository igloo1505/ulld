"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFG3IKPQKcjs = require('./chunk-FG3IKPQK.cjs');


var _chunkYGJPH6LQcjs = require('./chunk-YGJPH6LQ.cjs');


var _chunkM7S6K7SAcjs = require('./chunk-M7S6K7SA.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  glutenFree: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  Diet: _zod.z.lazy(() => _chunkFG3IKPQKcjs.DietOrderByRelationAggregateInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkM7S6K7SAcjs.ServingOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkYGJPH6LQcjs.DietaryItemOrderByRelevanceInputSchema).optional()
}).strict();
var DietaryItemOrderByWithRelationInputSchema_default = DietaryItemOrderByWithRelationInputSchema;




exports.DietaryItemOrderByWithRelationInputSchema = DietaryItemOrderByWithRelationInputSchema; exports.DietaryItemOrderByWithRelationInputSchema_default = DietaryItemOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-EOB53DGH.cjs.map