"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4KAUXHT6cjs = require('./chunk-4KAUXHT6.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BibOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk4KAUXHT6cjs.BibOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk4KAUXHT6cjs.BibOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BibOrderByRelevanceInputSchema_default = BibOrderByRelevanceInputSchema;




exports.BibOrderByRelevanceInputSchema = BibOrderByRelevanceInputSchema; exports.BibOrderByRelevanceInputSchema_default = BibOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-XTXOIETO.cjs.map