"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOFAAJP6Mcjs = require('./chunk-OFAAJP6M.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOFAAJP6Mcjs.RandomImageOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOFAAJP6Mcjs.RandomImageOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var RandomImageOrderByRelevanceInputSchema_default = RandomImageOrderByRelevanceInputSchema;




exports.RandomImageOrderByRelevanceInputSchema = RandomImageOrderByRelevanceInputSchema; exports.RandomImageOrderByRelevanceInputSchema_default = RandomImageOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-HS62NEEP.cjs.map