"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BibMaxOrderByAggregateInputSchema_default = BibMaxOrderByAggregateInputSchema;




exports.BibMaxOrderByAggregateInputSchema = BibMaxOrderByAggregateInputSchema; exports.BibMaxOrderByAggregateInputSchema_default = BibMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-RTR6HTYK.cjs.map