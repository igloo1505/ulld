"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRDXCG4YPcjs = require('./chunk-RDXCG4YP.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkRDXCG4YPcjs.DefinitionOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkRDXCG4YPcjs.DefinitionOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DefinitionOrderByRelevanceInputSchema_default = DefinitionOrderByRelevanceInputSchema;




exports.DefinitionOrderByRelevanceInputSchema = DefinitionOrderByRelevanceInputSchema; exports.DefinitionOrderByRelevanceInputSchema_default = DefinitionOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-KZPMY6EM.cjs.map