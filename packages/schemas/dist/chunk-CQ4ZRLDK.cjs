"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6I2TPGXGcjs = require('./chunk-6I2TPGXG.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var QuoteOrderByWithRelationInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pinned: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk6I2TPGXGcjs.QuoteOrderByRelevanceInputSchema).optional()
}).strict();
var QuoteOrderByWithRelationInputSchema_default = QuoteOrderByWithRelationInputSchema;




exports.QuoteOrderByWithRelationInputSchema = QuoteOrderByWithRelationInputSchema; exports.QuoteOrderByWithRelationInputSchema_default = QuoteOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-CQ4ZRLDK.cjs.map