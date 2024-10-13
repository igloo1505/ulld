"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSVDAYDFOcjs = require('./chunk-SVDAYDFO.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/EquationOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var EquationOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkSVDAYDFOcjs.EquationOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkSVDAYDFOcjs.EquationOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var EquationOrderByRelevanceInputSchema_default = EquationOrderByRelevanceInputSchema;




exports.EquationOrderByRelevanceInputSchema = EquationOrderByRelevanceInputSchema; exports.EquationOrderByRelevanceInputSchema_default = EquationOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-44KCARV5.cjs.map