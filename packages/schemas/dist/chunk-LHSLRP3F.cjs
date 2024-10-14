"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUB2GVF7Ecjs = require('./chunk-UB2GVF7E.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkUB2GVF7Ecjs.WaitlistRequestOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkUB2GVF7Ecjs.WaitlistRequestOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema;




exports.WaitlistRequestOrderByRelevanceInputSchema = WaitlistRequestOrderByRelevanceInputSchema; exports.WaitlistRequestOrderByRelevanceInputSchema_default = WaitlistRequestOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-LHSLRP3F.cjs.map