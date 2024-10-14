"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/EquationCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var EquationCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  desc: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  asPython: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  variableLegend: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var EquationCountOrderByAggregateInputSchema_default = EquationCountOrderByAggregateInputSchema;




exports.EquationCountOrderByAggregateInputSchema = EquationCountOrderByAggregateInputSchema; exports.EquationCountOrderByAggregateInputSchema_default = EquationCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-COBIQXN6.cjs.map