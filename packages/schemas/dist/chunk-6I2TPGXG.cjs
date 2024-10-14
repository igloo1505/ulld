"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7MZSUB4Wcjs = require('./chunk-7MZSUB4W.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QuoteOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var QuoteOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk7MZSUB4Wcjs.QuoteOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk7MZSUB4Wcjs.QuoteOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var QuoteOrderByRelevanceInputSchema_default = QuoteOrderByRelevanceInputSchema;




exports.QuoteOrderByRelevanceInputSchema = QuoteOrderByRelevanceInputSchema; exports.QuoteOrderByRelevanceInputSchema_default = QuoteOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-6I2TPGXG.cjs.map