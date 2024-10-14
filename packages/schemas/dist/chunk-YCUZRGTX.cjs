"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemMinOrderByAggregateInputSchema = _zod.z.object({
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
var DietaryItemMinOrderByAggregateInputSchema_default = DietaryItemMinOrderByAggregateInputSchema;




exports.DietaryItemMinOrderByAggregateInputSchema = DietaryItemMinOrderByAggregateInputSchema; exports.DietaryItemMinOrderByAggregateInputSchema_default = DietaryItemMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YCUZRGTX.cjs.map