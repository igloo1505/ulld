"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBLUNE7JXcjs = require('./chunk-BLUNE7JX.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SubjectOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SubjectOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkBLUNE7JXcjs.SubjectOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkBLUNE7JXcjs.SubjectOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SubjectOrderByRelevanceInputSchema_default = SubjectOrderByRelevanceInputSchema;




exports.SubjectOrderByRelevanceInputSchema = SubjectOrderByRelevanceInputSchema; exports.SubjectOrderByRelevanceInputSchema_default = SubjectOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-BNPUHKLR.cjs.map