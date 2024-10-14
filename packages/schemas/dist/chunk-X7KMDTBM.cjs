"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEC5YK33Ocjs = require('./chunk-EC5YK33O.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkEC5YK33Ocjs.ReadingListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkEC5YK33Ocjs.ReadingListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ReadingListOrderByRelevanceInputSchema_default = ReadingListOrderByRelevanceInputSchema;




exports.ReadingListOrderByRelevanceInputSchema = ReadingListOrderByRelevanceInputSchema; exports.ReadingListOrderByRelevanceInputSchema_default = ReadingListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-X7KMDTBM.cjs.map