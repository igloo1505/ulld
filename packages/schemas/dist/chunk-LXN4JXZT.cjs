"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WhiteboardCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardCountOrderByAggregateInputSchema_default = WhiteboardCountOrderByAggregateInputSchema;




exports.WhiteboardCountOrderByAggregateInputSchema = WhiteboardCountOrderByAggregateInputSchema; exports.WhiteboardCountOrderByAggregateInputSchema_default = WhiteboardCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-LXN4JXZT.cjs.map