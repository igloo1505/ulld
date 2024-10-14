"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2CHTTQZJcjs = require('./chunk-2CHTTQZJ.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk2CHTTQZJcjs.DailyFocusOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk2CHTTQZJcjs.DailyFocusOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DailyFocusOrderByRelevanceInputSchema_default = DailyFocusOrderByRelevanceInputSchema;




exports.DailyFocusOrderByRelevanceInputSchema = DailyFocusOrderByRelevanceInputSchema; exports.DailyFocusOrderByRelevanceInputSchema_default = DailyFocusOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-XH6M7YDZ.cjs.map