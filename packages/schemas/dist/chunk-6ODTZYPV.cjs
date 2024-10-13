"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNP6LWZFGcjs = require('./chunk-NP6LWZFG.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibEntryOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BibEntryOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkNP6LWZFGcjs.BibEntryOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkNP6LWZFGcjs.BibEntryOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BibEntryOrderByRelevanceInputSchema_default = BibEntryOrderByRelevanceInputSchema;




exports.BibEntryOrderByRelevanceInputSchema = BibEntryOrderByRelevanceInputSchema; exports.BibEntryOrderByRelevanceInputSchema_default = BibEntryOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-6ODTZYPV.cjs.map