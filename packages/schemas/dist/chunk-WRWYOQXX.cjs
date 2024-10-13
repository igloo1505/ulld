"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3FYCZSUOcjs = require('./chunk-3FYCZSUO.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var QuoteOrderByWithRelationInputSchema = _zod.z.object({
  body: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  source: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  pinned: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunk3FYCZSUOcjs.QuoteOrderByRelevanceInputSchema).optional()
}).strict();
var QuoteOrderByWithRelationInputSchema_default = QuoteOrderByWithRelationInputSchema;




exports.QuoteOrderByWithRelationInputSchema = QuoteOrderByWithRelationInputSchema; exports.QuoteOrderByWithRelationInputSchema_default = QuoteOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-WRWYOQXX.cjs.map