"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRACHBDFGcjs = require('./chunk-RACHBDFG.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QuoteOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var QuoteOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkRACHBDFGcjs.QuoteOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkRACHBDFGcjs.QuoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var QuoteOrderByRelevanceInputSchema_default = QuoteOrderByRelevanceInputSchema;




exports.QuoteOrderByRelevanceInputSchema = QuoteOrderByRelevanceInputSchema; exports.QuoteOrderByRelevanceInputSchema_default = QuoteOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-3FYCZSUO.cjs.map