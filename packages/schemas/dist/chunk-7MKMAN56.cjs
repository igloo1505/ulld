"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var BibCountOrderByAggregateInputSchema_default = BibCountOrderByAggregateInputSchema;




exports.BibCountOrderByAggregateInputSchema = BibCountOrderByAggregateInputSchema; exports.BibCountOrderByAggregateInputSchema_default = BibCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7MKMAN56.cjs.map