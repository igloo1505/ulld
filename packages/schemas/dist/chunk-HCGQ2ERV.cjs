"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ5BFYRT6cjs = require('./chunk-Z5BFYRT6.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkZ5BFYRT6cjs.WaitlistRequestOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkZ5BFYRT6cjs.WaitlistRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema;




exports.WaitlistRequestOrderByRelevanceInputSchema = WaitlistRequestOrderByRelevanceInputSchema; exports.WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-HCGQ2ERV.cjs.map