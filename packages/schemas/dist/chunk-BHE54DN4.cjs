"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BusinessContactMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BusinessContactMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  phone: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  purpose: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var BusinessContactMaxOrderByAggregateInputSchema_default = BusinessContactMaxOrderByAggregateInputSchema;




exports.BusinessContactMaxOrderByAggregateInputSchema = BusinessContactMaxOrderByAggregateInputSchema; exports.BusinessContactMaxOrderByAggregateInputSchema_default = BusinessContactMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-BHE54DN4.cjs.map