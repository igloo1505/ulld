"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BibCountOrderByAggregateInputSchema_default = BibCountOrderByAggregateInputSchema;




exports.BibCountOrderByAggregateInputSchema = BibCountOrderByAggregateInputSchema; exports.BibCountOrderByAggregateInputSchema_default = BibCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Q7XAVQI2.cjs.map