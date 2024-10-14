"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC3ZFSB4Dcjs = require('./chunk-C3ZFSB4D.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkC3ZFSB4Dcjs.DietaryItemOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkC3ZFSB4Dcjs.DietaryItemOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DietaryItemOrderByRelevanceInputSchema_default = DietaryItemOrderByRelevanceInputSchema;




exports.DietaryItemOrderByRelevanceInputSchema = DietaryItemOrderByRelevanceInputSchema; exports.DietaryItemOrderByRelevanceInputSchema_default = DietaryItemOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-YGJPH6LQ.cjs.map