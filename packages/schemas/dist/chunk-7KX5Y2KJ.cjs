"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairAvgOrderByAggregateInputSchema = _zod.z.object({
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var QAPairAvgOrderByAggregateInputSchema_default = QAPairAvgOrderByAggregateInputSchema;




exports.QAPairAvgOrderByAggregateInputSchema = QAPairAvgOrderByAggregateInputSchema; exports.QAPairAvgOrderByAggregateInputSchema_default = QAPairAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7KX5Y2KJ.cjs.map