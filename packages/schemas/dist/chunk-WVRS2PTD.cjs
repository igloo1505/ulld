"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/EquationMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var EquationMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  desc: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  asPython: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var EquationMinOrderByAggregateInputSchema_default = EquationMinOrderByAggregateInputSchema;




exports.EquationMinOrderByAggregateInputSchema = EquationMinOrderByAggregateInputSchema; exports.EquationMinOrderByAggregateInputSchema_default = EquationMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WVRS2PTD.cjs.map