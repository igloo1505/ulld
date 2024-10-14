"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAVSJP3O5cjs = require('./chunk-AVSJP3O5.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SubjectOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SubjectOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkAVSJP3O5cjs.SubjectOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkAVSJP3O5cjs.SubjectOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SubjectOrderByRelevanceInputSchema_default = SubjectOrderByRelevanceInputSchema;




exports.SubjectOrderByRelevanceInputSchema = SubjectOrderByRelevanceInputSchema; exports.SubjectOrderByRelevanceInputSchema_default = SubjectOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-QMMC6GDG.cjs.map