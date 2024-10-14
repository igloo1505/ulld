"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJHXKKWJQcjs = require('./chunk-JHXKKWJQ.cjs');


var _chunkYCNGMTG4cjs = require('./chunk-YCNGMTG4.cjs');


var _chunkC2CQTZYKcjs = require('./chunk-C2CQTZYK.cjs');


var _chunkCBBPMWV7cjs = require('./chunk-CBBPMWV7.cjs');


var _chunkPBQPFRBMcjs = require('./chunk-PBQPFRBM.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/IpynbOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var IpynbOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  raw: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkYCNGMTG4cjs.IpynbCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkJHXKKWJQcjs.IpynbAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkCBBPMWV7cjs.IpynbMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkC2CQTZYKcjs.IpynbMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkPBQPFRBMcjs.IpynbSumOrderByAggregateInputSchema).optional()
}).strict();
var IpynbOrderByWithAggregationInputSchema_default = IpynbOrderByWithAggregationInputSchema;




exports.IpynbOrderByWithAggregationInputSchema = IpynbOrderByWithAggregationInputSchema; exports.IpynbOrderByWithAggregationInputSchema_default = IpynbOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-G4QG3AHF.cjs.map