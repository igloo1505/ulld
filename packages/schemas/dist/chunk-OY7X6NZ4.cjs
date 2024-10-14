"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var BibMaxOrderByAggregateInputSchema_default = BibMaxOrderByAggregateInputSchema;




exports.BibMaxOrderByAggregateInputSchema = BibMaxOrderByAggregateInputSchema; exports.BibMaxOrderByAggregateInputSchema_default = BibMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OY7X6NZ4.cjs.map