"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRUODBZ6Tcjs = require('./chunk-RUODBZ6T.cjs');


var _chunkULGT4F5Tcjs = require('./chunk-ULGT4F5T.cjs');


var _chunk6RZCC5SNcjs = require('./chunk-6RZCC5SN.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkULGT4F5Tcjs.DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkRUODBZ6Tcjs.DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk6RZCC5SNcjs.DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();
var DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema;




exports.DailyFocusOrderByWithAggregationInputSchema = DailyFocusOrderByWithAggregationInputSchema; exports.DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-4V4MANTM.cjs.map