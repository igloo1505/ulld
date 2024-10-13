"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkURFFUWAEcjs = require('./chunk-URFFUWAE.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TagOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkURFFUWAEcjs.TagOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkURFFUWAEcjs.TagOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TagOrderByRelevanceInputSchema_default = TagOrderByRelevanceInputSchema;




exports.TagOrderByRelevanceInputSchema = TagOrderByRelevanceInputSchema; exports.TagOrderByRelevanceInputSchema_default = TagOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-HRAYFIRT.cjs.map