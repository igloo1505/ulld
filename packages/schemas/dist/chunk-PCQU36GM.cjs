"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEL6ZPC4Ccjs = require('./chunk-EL6ZPC4C.cjs');


var _chunkX66VYXNOcjs = require('./chunk-X66VYXNO.cjs');


var _chunkHVUEEECWcjs = require('./chunk-HVUEEECW.cjs');


var _chunk2UMU7BTJcjs = require('./chunk-2UMU7BTJ.cjs');


var _chunkNNWJU767cjs = require('./chunk-NNWJU767.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var IpynbOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  raw: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkX66VYXNOcjs.IpynbCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkEL6ZPC4Ccjs.IpynbAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk2UMU7BTJcjs.IpynbMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHVUEEECWcjs.IpynbMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkNNWJU767cjs.IpynbSumOrderByAggregateInputSchema).optional()
}).strict();
var IpynbOrderByWithAggregationInputSchema_default = IpynbOrderByWithAggregationInputSchema;




exports.IpynbOrderByWithAggregationInputSchema = IpynbOrderByWithAggregationInputSchema; exports.IpynbOrderByWithAggregationInputSchema_default = IpynbOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-PCQU36GM.cjs.map