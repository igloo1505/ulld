"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGPNQV5SNcjs = require('./chunk-GPNQV5SN.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DietOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkGPNQV5SNcjs.DietOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkGPNQV5SNcjs.DietOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DietOrderByRelevanceInputSchema_default = DietOrderByRelevanceInputSchema;




exports.DietOrderByRelevanceInputSchema = DietOrderByRelevanceInputSchema; exports.DietOrderByRelevanceInputSchema_default = DietOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-O766JMQP.cjs.map