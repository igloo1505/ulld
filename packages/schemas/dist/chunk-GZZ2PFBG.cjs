"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3UAPN5ROcjs = require('./chunk-3UAPN5RO.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var IpynbOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk3UAPN5ROcjs.IpynbOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk3UAPN5ROcjs.IpynbOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var IpynbOrderByRelevanceInputSchema_default = IpynbOrderByRelevanceInputSchema;




exports.IpynbOrderByRelevanceInputSchema = IpynbOrderByRelevanceInputSchema; exports.IpynbOrderByRelevanceInputSchema_default = IpynbOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GZZ2PFBG.cjs.map