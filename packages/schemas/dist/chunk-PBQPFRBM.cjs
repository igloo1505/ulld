"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/IpynbSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var IpynbSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema;




exports.IpynbSumOrderByAggregateInputSchema = IpynbSumOrderByAggregateInputSchema; exports.IpynbSumOrderByAggregateInputSchema_default = IpynbSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PBQPFRBM.cjs.map