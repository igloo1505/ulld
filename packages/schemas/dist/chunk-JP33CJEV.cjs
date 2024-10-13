"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUA3ZZE7Qcjs = require('./chunk-UA3ZZE7Q.cjs');


var _chunkHNRSA3YGcjs = require('./chunk-HNRSA3YG.cjs');


var _chunkFAFPQXJMcjs = require('./chunk-FAFPQXJM.cjs');


var _chunkLEBATN63cjs = require('./chunk-LEBATN63.cjs');


var _chunkSBIZWGTOcjs = require('./chunk-SBIZWGTO.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  phone: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  purpose: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkFAFPQXJMcjs.BusinessContactCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkLEBATN63cjs.BusinessContactAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHNRSA3YGcjs.BusinessContactMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUA3ZZE7Qcjs.BusinessContactMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkSBIZWGTOcjs.BusinessContactSumOrderByAggregateInputSchema).optional()
}).strict();
var BusinessContactOrderByWithAggregationInputSchema_default = BusinessContactOrderByWithAggregationInputSchema;




exports.BusinessContactOrderByWithAggregationInputSchema = BusinessContactOrderByWithAggregationInputSchema; exports.BusinessContactOrderByWithAggregationInputSchema_default = BusinessContactOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-JP33CJEV.cjs.map