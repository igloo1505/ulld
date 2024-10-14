"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/IpynbCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var IpynbCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  raw: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var IpynbCountOrderByAggregateInputSchema_default = IpynbCountOrderByAggregateInputSchema;




exports.IpynbCountOrderByAggregateInputSchema = IpynbCountOrderByAggregateInputSchema; exports.IpynbCountOrderByAggregateInputSchema_default = IpynbCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YCNGMTG4.cjs.map