"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLWO3KDB5cjs = require('./chunk-LWO3KDB5.cjs');


var _chunkCVIZMQVScjs = require('./chunk-CVIZMQVS.cjs');


var _chunkHNEHAYV2cjs = require('./chunk-HNEHAYV2.cjs');


var _chunkI7LYH5GWcjs = require('./chunk-I7LYH5GW.cjs');


var _chunkZ6QVC6COcjs = require('./chunk-Z6QVC6CO.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var MdxNoteOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  dietSummaryKey: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  noteType: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  formatted: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  imageSrc: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  href: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  floatImages: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  remoteUrl: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  trackRemote: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quickLink: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkLWO3KDB5cjs.MdxNoteCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkCVIZMQVScjs.MdxNoteAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkI7LYH5GWcjs.MdxNoteMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHNEHAYV2cjs.MdxNoteMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkZ6QVC6COcjs.MdxNoteSumOrderByAggregateInputSchema).optional()
}).strict();
var MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema;




exports.MdxNoteOrderByWithAggregationInputSchema = MdxNoteOrderByWithAggregationInputSchema; exports.MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-2MA5RGIR.cjs.map