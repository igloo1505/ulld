"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteSumOrderByAggregateInputSchema_default = MdxNoteSumOrderByAggregateInputSchema;




exports.MdxNoteSumOrderByAggregateInputSchema = MdxNoteSumOrderByAggregateInputSchema; exports.MdxNoteSumOrderByAggregateInputSchema_default = MdxNoteSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Z6QVC6CO.cjs.map