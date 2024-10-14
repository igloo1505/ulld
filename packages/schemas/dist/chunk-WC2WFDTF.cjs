"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3NRB3KYCcjs = require('./chunk-3NRB3KYC.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk3NRB3KYCcjs.KanBanListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk3NRB3KYCcjs.KanBanListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanBanListOrderByRelevanceInputSchema_default = KanBanListOrderByRelevanceInputSchema;




exports.KanBanListOrderByRelevanceInputSchema = KanBanListOrderByRelevanceInputSchema; exports.KanBanListOrderByRelevanceInputSchema_default = KanBanListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-WC2WFDTF.cjs.map