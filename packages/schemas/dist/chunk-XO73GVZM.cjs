"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLXN4JXZTcjs = require('./chunk-LXN4JXZT.cjs');


var _chunkO4XN2DMAcjs = require('./chunk-O4XN2DMA.cjs');


var _chunkIOZH23HScjs = require('./chunk-IOZH23HS.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkLXN4JXZTcjs.WhiteboardCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkIOZH23HScjs.WhiteboardMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkO4XN2DMAcjs.WhiteboardMinOrderByAggregateInputSchema).optional()
}).strict();
var WhiteboardOrderByWithAggregationInputSchema_default = WhiteboardOrderByWithAggregationInputSchema;




exports.WhiteboardOrderByWithAggregationInputSchema = WhiteboardOrderByWithAggregationInputSchema; exports.WhiteboardOrderByWithAggregationInputSchema_default = WhiteboardOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-XO73GVZM.cjs.map