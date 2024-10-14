"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkECNMF7C2cjs = require('./chunk-ECNMF7C2.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var QAPairOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkECNMF7C2cjs.QAPairOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkECNMF7C2cjs.QAPairOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var QAPairOrderByRelevanceInputSchema_default = QAPairOrderByRelevanceInputSchema;




exports.QAPairOrderByRelevanceInputSchema = QAPairOrderByRelevanceInputSchema; exports.QAPairOrderByRelevanceInputSchema_default = QAPairOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-FFAQ756I.cjs.map