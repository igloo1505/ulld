"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGIEJWKWRcjs = require('./chunk-GIEJWKWR.cjs');


var _chunkOZRFUNPWcjs = require('./chunk-OZRFUNPW.cjs');


var _chunkIGM7JL6Ccjs = require('./chunk-IGM7JL6C.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkOZRFUNPWcjs.DailyFocusCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkGIEJWKWRcjs.DailyFocusMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIGM7JL6Ccjs.DailyFocusMinOrderByAggregateInputSchema).optional()
}).strict();
var DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema;




exports.DailyFocusOrderByWithAggregationInputSchema = DailyFocusOrderByWithAggregationInputSchema; exports.DailyFocusOrderByWithAggregationInputSchema_default = DailyFocusOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-OEWCDHLV.cjs.map