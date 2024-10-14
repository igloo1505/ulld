"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardMinOrderByAggregateInputSchema_default = WhiteboardMinOrderByAggregateInputSchema;




exports.WhiteboardMinOrderByAggregateInputSchema = WhiteboardMinOrderByAggregateInputSchema; exports.WhiteboardMinOrderByAggregateInputSchema_default = WhiteboardMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-O4XN2DMA.cjs.map