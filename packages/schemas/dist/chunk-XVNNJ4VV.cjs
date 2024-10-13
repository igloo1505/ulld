"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGUTFB5ZTcjs = require('./chunk-GUTFB5ZT.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DefinitionOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DefinitionOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkGUTFB5ZTcjs.DefinitionOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkGUTFB5ZTcjs.DefinitionOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DefinitionOrderByRelevanceInputSchema_default = DefinitionOrderByRelevanceInputSchema;




exports.DefinitionOrderByRelevanceInputSchema = DefinitionOrderByRelevanceInputSchema; exports.DefinitionOrderByRelevanceInputSchema_default = DefinitionOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-XVNNJ4VV.cjs.map