"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBXUO2OFCcjs = require('./chunk-BXUO2OFC.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/KanBanListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanBanListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkBXUO2OFCcjs.KanBanListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkBXUO2OFCcjs.KanBanListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanBanListOrderByRelevanceInputSchema_default = KanBanListOrderByRelevanceInputSchema;




exports.KanBanListOrderByRelevanceInputSchema = KanBanListOrderByRelevanceInputSchema; exports.KanBanListOrderByRelevanceInputSchema_default = KanBanListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-S5HWHRI7.cjs.map