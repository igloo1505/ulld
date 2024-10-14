"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLH4SPXLEcjs = require('./chunk-LH4SPXLE.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SnippetOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SnippetOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkLH4SPXLEcjs.SnippetOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkLH4SPXLEcjs.SnippetOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SnippetOrderByRelevanceInputSchema_default = SnippetOrderByRelevanceInputSchema;




exports.SnippetOrderByRelevanceInputSchema = SnippetOrderByRelevanceInputSchema; exports.SnippetOrderByRelevanceInputSchema_default = SnippetOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-3UMDOAOU.cjs.map