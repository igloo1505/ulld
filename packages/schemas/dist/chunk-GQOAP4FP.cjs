"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairAvgOrderByAggregateInputSchema = _zod.z.object({
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QAPairAvgOrderByAggregateInputSchema_default = QAPairAvgOrderByAggregateInputSchema;




exports.QAPairAvgOrderByAggregateInputSchema = QAPairAvgOrderByAggregateInputSchema; exports.QAPairAvgOrderByAggregateInputSchema_default = QAPairAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GQOAP4FP.cjs.map