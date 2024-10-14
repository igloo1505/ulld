"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7MKMAN56cjs = require('./chunk-7MKMAN56.cjs');


var _chunkAUTDAWB5cjs = require('./chunk-AUTDAWB5.cjs');


var _chunk4XH4XDL6cjs = require('./chunk-4XH4XDL6.cjs');


var _chunkOY7X6NZ4cjs = require('./chunk-OY7X6NZ4.cjs');


var _chunkFYI2FZJScjs = require('./chunk-FYI2FZJS.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var BibOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk7MKMAN56cjs.BibCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkAUTDAWB5cjs.BibAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkOY7X6NZ4cjs.BibMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk4XH4XDL6cjs.BibMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkFYI2FZJScjs.BibSumOrderByAggregateInputSchema).optional()
}).strict();
var BibOrderByWithAggregationInputSchema_default = BibOrderByWithAggregationInputSchema;




exports.BibOrderByWithAggregationInputSchema = BibOrderByWithAggregationInputSchema; exports.BibOrderByWithAggregationInputSchema_default = BibOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-XYLJS2ML.cjs.map