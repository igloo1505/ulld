"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXD4RTDUIcjs = require('./chunk-XD4RTDUI.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BusinessContactOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var BusinessContactOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkXD4RTDUIcjs.BusinessContactOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkXD4RTDUIcjs.BusinessContactOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema;




exports.BusinessContactOrderByRelevanceInputSchema = BusinessContactOrderByRelevanceInputSchema; exports.BusinessContactOrderByRelevanceInputSchema_default = BusinessContactOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-KJQAER44.cjs.map