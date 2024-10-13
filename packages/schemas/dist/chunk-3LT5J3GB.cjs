"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BibMinOrderByAggregateInputSchema_default = BibMinOrderByAggregateInputSchema;




exports.BibMinOrderByAggregateInputSchema = BibMinOrderByAggregateInputSchema; exports.BibMinOrderByAggregateInputSchema_default = BibMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-3LT5J3GB.cjs.map