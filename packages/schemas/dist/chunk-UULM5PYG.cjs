"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5PK54UPRcjs = require('./chunk-5PK54UPR.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk5PK54UPRcjs.CitationsGroupOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk5PK54UPRcjs.CitationsGroupOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var CitationsGroupOrderByRelevanceInputSchema_default = CitationsGroupOrderByRelevanceInputSchema;




exports.CitationsGroupOrderByRelevanceInputSchema = CitationsGroupOrderByRelevanceInputSchema; exports.CitationsGroupOrderByRelevanceInputSchema_default = CitationsGroupOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-UULM5PYG.cjs.map