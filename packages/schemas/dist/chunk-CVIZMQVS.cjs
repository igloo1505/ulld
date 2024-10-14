"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteAvgOrderByAggregateInputSchema_default = MdxNoteAvgOrderByAggregateInputSchema;




exports.MdxNoteAvgOrderByAggregateInputSchema = MdxNoteAvgOrderByAggregateInputSchema; exports.MdxNoteAvgOrderByAggregateInputSchema_default = MdxNoteAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-CVIZMQVS.cjs.map