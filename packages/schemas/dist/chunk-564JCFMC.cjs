"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairSumOrderByAggregateInputSchema = _zod.z.object({
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QAPairSumOrderByAggregateInputSchema_default = QAPairSumOrderByAggregateInputSchema;




exports.QAPairSumOrderByAggregateInputSchema = QAPairSumOrderByAggregateInputSchema; exports.QAPairSumOrderByAggregateInputSchema_default = QAPairSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-564JCFMC.cjs.map