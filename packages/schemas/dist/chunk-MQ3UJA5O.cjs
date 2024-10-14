"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var QAPairCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  secondaryLabel: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var QAPairCountOrderByAggregateInputSchema_default = QAPairCountOrderByAggregateInputSchema;




exports.QAPairCountOrderByAggregateInputSchema = QAPairCountOrderByAggregateInputSchema; exports.QAPairCountOrderByAggregateInputSchema_default = QAPairCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MQ3UJA5O.cjs.map