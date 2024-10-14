"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYUKP6WIGcjs = require('./chunk-YUKP6WIG.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/EquationOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var EquationOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkYUKP6WIGcjs.EquationOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkYUKP6WIGcjs.EquationOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var EquationOrderByRelevanceInputSchema_default = EquationOrderByRelevanceInputSchema;




exports.EquationOrderByRelevanceInputSchema = EquationOrderByRelevanceInputSchema; exports.EquationOrderByRelevanceInputSchema_default = EquationOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-SDX5OO7J.cjs.map