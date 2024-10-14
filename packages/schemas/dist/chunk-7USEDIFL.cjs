"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDBQBRQDWcjs = require('./chunk-DBQBRQDW.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TagOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TagOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkDBQBRQDWcjs.TagOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkDBQBRQDWcjs.TagOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TagOrderByRelevanceInputSchema_default = TagOrderByRelevanceInputSchema;




exports.TagOrderByRelevanceInputSchema = TagOrderByRelevanceInputSchema; exports.TagOrderByRelevanceInputSchema_default = TagOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-7USEDIFL.cjs.map