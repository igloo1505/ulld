"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUETDE75Kcjs = require('./chunk-UETDE75K.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DietOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkUETDE75Kcjs.DietOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkUETDE75Kcjs.DietOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DietOrderByRelevanceInputSchema_default = DietOrderByRelevanceInputSchema;




exports.DietOrderByRelevanceInputSchema = DietOrderByRelevanceInputSchema; exports.DietOrderByRelevanceInputSchema_default = DietOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-VDXTVAH2.cjs.map