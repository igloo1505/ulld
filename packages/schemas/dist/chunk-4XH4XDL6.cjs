"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  filename: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var BibMinOrderByAggregateInputSchema_default = BibMinOrderByAggregateInputSchema;




exports.BibMinOrderByAggregateInputSchema = BibMinOrderByAggregateInputSchema; exports.BibMinOrderByAggregateInputSchema_default = BibMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-4XH4XDL6.cjs.map