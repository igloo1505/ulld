"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQTMHDU3Tcjs = require('./chunk-QTMHDU3T.cjs');


var _chunkWJBYRLHScjs = require('./chunk-WJBYRLHS.cjs');


var _chunkL4HKFGBBcjs = require('./chunk-L4HKFGBB.cjs');


var _chunk5XQ7CP7Xcjs = require('./chunk-5XQ7CP7X.cjs');


var _chunkQKL4P4A5cjs = require('./chunk-QKL4P4A5.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  indexWithinBoard: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQTMHDU3Tcjs.KanBanListCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkWJBYRLHScjs.KanBanListAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk5XQ7CP7Xcjs.KanBanListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkL4HKFGBBcjs.KanBanListMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkQKL4P4A5cjs.KanBanListSumOrderByAggregateInputSchema).optional()
}).strict();
var KanBanListOrderByWithAggregationInputSchema_default = KanBanListOrderByWithAggregationInputSchema;




exports.KanBanListOrderByWithAggregationInputSchema = KanBanListOrderByWithAggregationInputSchema; exports.KanBanListOrderByWithAggregationInputSchema_default = KanBanListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-WGMCHZKM.cjs.map