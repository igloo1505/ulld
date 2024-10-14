"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietMaxOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  carb: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietMaxOrderByAggregateInputSchema_default = DietMaxOrderByAggregateInputSchema;




exports.DietMaxOrderByAggregateInputSchema = DietMaxOrderByAggregateInputSchema; exports.DietMaxOrderByAggregateInputSchema_default = DietMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ZLRGXR5X.cjs.map