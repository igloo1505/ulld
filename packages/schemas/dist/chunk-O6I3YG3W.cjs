"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQ6DVRUNAcjs = require('./chunk-Q6DVRUNA.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BibOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkQ6DVRUNAcjs.BibOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkQ6DVRUNAcjs.BibOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BibOrderByRelevanceInputSchema_default = BibOrderByRelevanceInputSchema;




exports.BibOrderByRelevanceInputSchema = BibOrderByRelevanceInputSchema; exports.BibOrderByRelevanceInputSchema_default = BibOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-O6I3YG3W.cjs.map