"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2KRFS2NAcjs = require('./chunk-2KRFS2NA.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk2KRFS2NAcjs.BusinessContactOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk2KRFS2NAcjs.BusinessContactOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema;




exports.BusinessContactOrderByRelevanceInputSchema = BusinessContactOrderByRelevanceInputSchema; exports.BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-VVXS3RWA.cjs.map