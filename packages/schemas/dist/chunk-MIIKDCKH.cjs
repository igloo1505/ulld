"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteSumOrderByAggregateInputSchema_default = MdxNoteSumOrderByAggregateInputSchema;




exports.MdxNoteSumOrderByAggregateInputSchema = MdxNoteSumOrderByAggregateInputSchema; exports.MdxNoteSumOrderByAggregateInputSchema_default = MdxNoteSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MIIKDCKH.cjs.map