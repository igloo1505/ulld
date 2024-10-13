"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWMAYKLBMcjs = require('./chunk-WMAYKLBM.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TopicOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkWMAYKLBMcjs.TopicOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkWMAYKLBMcjs.TopicOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TopicOrderByRelevanceInputSchema_default = TopicOrderByRelevanceInputSchema;




exports.TopicOrderByRelevanceInputSchema = TopicOrderByRelevanceInputSchema; exports.TopicOrderByRelevanceInputSchema_default = TopicOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GCA45JI4.cjs.map