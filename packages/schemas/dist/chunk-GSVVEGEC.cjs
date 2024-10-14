"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDBYMHUCQcjs = require('./chunk-DBYMHUCQ.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibEntryOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BibEntryOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkDBYMHUCQcjs.BibEntryOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkDBYMHUCQcjs.BibEntryOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BibEntryOrderByRelevanceInputSchema_default = BibEntryOrderByRelevanceInputSchema;




exports.BibEntryOrderByRelevanceInputSchema = BibEntryOrderByRelevanceInputSchema; exports.BibEntryOrderByRelevanceInputSchema_default = BibEntryOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-GSVVEGEC.cjs.map