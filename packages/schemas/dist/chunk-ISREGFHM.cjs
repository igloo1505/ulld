"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteAvgOrderByAggregateInputSchema_default = MdxNoteAvgOrderByAggregateInputSchema;




exports.MdxNoteAvgOrderByAggregateInputSchema = MdxNoteAvgOrderByAggregateInputSchema; exports.MdxNoteAvgOrderByAggregateInputSchema_default = MdxNoteAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ISREGFHM.cjs.map