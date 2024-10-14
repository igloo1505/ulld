"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5SZTL6B5cjs = require('./chunk-5SZTL6B5.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/IpynbOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var IpynbOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk5SZTL6B5cjs.IpynbOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk5SZTL6B5cjs.IpynbOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var IpynbOrderByRelevanceInputSchema_default = IpynbOrderByRelevanceInputSchema;




exports.IpynbOrderByRelevanceInputSchema = IpynbOrderByRelevanceInputSchema; exports.IpynbOrderByRelevanceInputSchema_default = IpynbOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-TO6RAW45.cjs.map