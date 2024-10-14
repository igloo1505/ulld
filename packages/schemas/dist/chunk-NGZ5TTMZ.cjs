"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  barcode: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glutenFree: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemCountOrderByAggregateInputSchema_default = DietaryItemCountOrderByAggregateInputSchema;




exports.DietaryItemCountOrderByAggregateInputSchema = DietaryItemCountOrderByAggregateInputSchema; exports.DietaryItemCountOrderByAggregateInputSchema_default = DietaryItemCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NGZ5TTMZ.cjs.map