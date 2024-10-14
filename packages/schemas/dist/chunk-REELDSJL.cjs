"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJQ2RKCI7cjs = require('./chunk-JQ2RKCI7.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkJQ2RKCI7cjs.CitationsGroupOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkJQ2RKCI7cjs.CitationsGroupOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var CitationsGroupOrderByRelevanceInputSchema_default = CitationsGroupOrderByRelevanceInputSchema;




exports.CitationsGroupOrderByRelevanceInputSchema = CitationsGroupOrderByRelevanceInputSchema; exports.CitationsGroupOrderByRelevanceInputSchema_default = CitationsGroupOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-REELDSJL.cjs.map