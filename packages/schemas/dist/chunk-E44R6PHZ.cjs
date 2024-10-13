"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BCAHLSYcjs = require('./chunk-2BCAHLSY.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var RelatedValuesOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equations: _zod.z.lazy(() => _chunk2BCAHLSYcjs.EquationOrderByRelationAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithRelationInputSchema_default = RelatedValuesOrderByWithRelationInputSchema;




exports.RelatedValuesOrderByWithRelationInputSchema = RelatedValuesOrderByWithRelationInputSchema; exports.RelatedValuesOrderByWithRelationInputSchema_default = RelatedValuesOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-E44R6PHZ.cjs.map