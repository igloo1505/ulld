"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGXSWZ4WMcjs = require('./chunk-GXSWZ4WM.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkGXSWZ4WMcjs.ReadingListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkGXSWZ4WMcjs.ReadingListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var ReadingListOrderByRelevanceInputSchema_default = ReadingListOrderByRelevanceInputSchema;




exports.ReadingListOrderByRelevanceInputSchema = ReadingListOrderByRelevanceInputSchema; exports.ReadingListOrderByRelevanceInputSchema_default = ReadingListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-M4KXIQLV.cjs.map