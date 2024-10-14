"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardMaxOrderByAggregateInputSchema_default = WhiteboardMaxOrderByAggregateInputSchema;




exports.WhiteboardMaxOrderByAggregateInputSchema = WhiteboardMaxOrderByAggregateInputSchema; exports.WhiteboardMaxOrderByAggregateInputSchema_default = WhiteboardMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IOZH23HS.cjs.map