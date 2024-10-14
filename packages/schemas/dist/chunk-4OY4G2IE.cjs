"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFJW5VEXOcjs = require('./chunk-FJW5VEXO.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DJTOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DJTOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkFJW5VEXOcjs.DJTOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkFJW5VEXOcjs.DJTOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DJTOrderByRelevanceInputSchema_default = DJTOrderByRelevanceInputSchema;




exports.DJTOrderByRelevanceInputSchema = DJTOrderByRelevanceInputSchema; exports.DJTOrderByRelevanceInputSchema_default = DJTOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-4OY4G2IE.cjs.map