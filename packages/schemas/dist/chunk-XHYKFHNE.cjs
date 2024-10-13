"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairSumOrderByAggregateInputSchema = _zod.z.object({
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QAPairSumOrderByAggregateInputSchema_default = QAPairSumOrderByAggregateInputSchema;




exports.QAPairSumOrderByAggregateInputSchema = QAPairSumOrderByAggregateInputSchema; exports.QAPairSumOrderByAggregateInputSchema_default = QAPairSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-XHYKFHNE.cjs.map