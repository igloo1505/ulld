"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkARWG4PSDcjs = require('./chunk-ARWG4PSD.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TopicOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkARWG4PSDcjs.TopicOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkARWG4PSDcjs.TopicOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TopicOrderByRelevanceInputSchema_default = TopicOrderByRelevanceInputSchema;




exports.TopicOrderByRelevanceInputSchema = TopicOrderByRelevanceInputSchema; exports.TopicOrderByRelevanceInputSchema_default = TopicOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-H44CUD5U.cjs.map