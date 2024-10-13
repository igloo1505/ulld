"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNS2D7Y56cjs = require('./chunk-NS2D7Y56.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var QAPairOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkNS2D7Y56cjs.QAPairOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkNS2D7Y56cjs.QAPairOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var QAPairOrderByRelevanceInputSchema_default = QAPairOrderByRelevanceInputSchema;




exports.QAPairOrderByRelevanceInputSchema = QAPairOrderByRelevanceInputSchema; exports.QAPairOrderByRelevanceInputSchema_default = QAPairOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-KWPKMECG.cjs.map