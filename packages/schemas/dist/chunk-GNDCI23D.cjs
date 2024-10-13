"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBEEXY3ERcjs = require('./chunk-BEEXY3ER.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SnippetOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SnippetOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkBEEXY3ERcjs.SnippetOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkBEEXY3ERcjs.SnippetOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SnippetOrderByRelevanceInputSchema_default = SnippetOrderByRelevanceInputSchema;




exports.SnippetOrderByRelevanceInputSchema = SnippetOrderByRelevanceInputSchema; exports.SnippetOrderByRelevanceInputSchema_default = SnippetOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GNDCI23D.cjs.map