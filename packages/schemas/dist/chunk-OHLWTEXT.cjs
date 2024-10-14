"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHOHQCPRAcjs = require('./chunk-HOHQCPRA.cjs');


var _chunkBHE54DN4cjs = require('./chunk-BHE54DN4.cjs');


var _chunkGBKKM4JTcjs = require('./chunk-GBKKM4JT.cjs');


var _chunkCT7OBIKCcjs = require('./chunk-CT7OBIKC.cjs');


var _chunkGIWEFWHOcjs = require('./chunk-GIWEFWHO.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkGBKKM4JTcjs.BusinessContactCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkCT7OBIKCcjs.BusinessContactAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkBHE54DN4cjs.BusinessContactMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHOHQCPRAcjs.BusinessContactMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkGIWEFWHOcjs.BusinessContactSumOrderByAggregateInputSchema).optional()
}).strict();
var BusinessContactOrderByWithAggregationInputSchema_default = BusinessContactOrderByWithAggregationInputSchema;




exports.BusinessContactOrderByWithAggregationInputSchema = BusinessContactOrderByWithAggregationInputSchema; exports.BusinessContactOrderByWithAggregationInputSchema_default = BusinessContactOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-OHLWTEXT.cjs.map