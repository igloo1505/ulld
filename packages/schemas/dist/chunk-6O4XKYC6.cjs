"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemAvgOrderByAggregateInputSchema_default = DietaryItemAvgOrderByAggregateInputSchema;




exports.DietaryItemAvgOrderByAggregateInputSchema = DietaryItemAvgOrderByAggregateInputSchema; exports.DietaryItemAvgOrderByAggregateInputSchema_default = DietaryItemAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-6O4XKYC6.cjs.map