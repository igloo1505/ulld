"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibEntryOrderByRelationAggregateInputSchema.ts
var _zod = require('zod');
var BibEntryOrderByRelationAggregateInputSchema = _zod.z.object({
  _count: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BibEntryOrderByRelationAggregateInputSchema_default = BibEntryOrderByRelationAggregateInputSchema;




exports.BibEntryOrderByRelationAggregateInputSchema = BibEntryOrderByRelationAggregateInputSchema; exports.BibEntryOrderByRelationAggregateInputSchema_default = BibEntryOrderByRelationAggregateInputSchema_default;
//# sourceMappingURL=chunk-M3EST7T5.cjs.map