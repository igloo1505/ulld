"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE6ICCXYMcjs = require('./chunk-E6ICCXYM.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/KanBanCardOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var KanBanCardOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkE6ICCXYMcjs.KanBanCardOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkE6ICCXYMcjs.KanBanCardOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var KanBanCardOrderByRelevanceInputSchema_default = KanBanCardOrderByRelevanceInputSchema;




exports.KanBanCardOrderByRelevanceInputSchema = KanBanCardOrderByRelevanceInputSchema; exports.KanBanCardOrderByRelevanceInputSchema_default = KanBanCardOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-V2JN7ZGB.cjs.map