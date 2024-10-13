"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTHBGFVWQcjs = require('./chunk-THBGFVWQ.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkTHBGFVWQcjs.KanBanCardOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkTHBGFVWQcjs.KanBanCardOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanBanCardOrderByRelevanceInputSchema_default = KanBanCardOrderByRelevanceInputSchema;




exports.KanBanCardOrderByRelevanceInputSchema = KanBanCardOrderByRelevanceInputSchema; exports.KanBanCardOrderByRelevanceInputSchema_default = KanBanCardOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-4AVCDOAD.cjs.map