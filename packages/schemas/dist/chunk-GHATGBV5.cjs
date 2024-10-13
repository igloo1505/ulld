"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TopicOrderByRelationAggregateInputSchema.ts
var _zod = require('zod');
var TopicOrderByRelationAggregateInputSchema = _zod.z.object({
  _count: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TopicOrderByRelationAggregateInputSchema_default = TopicOrderByRelationAggregateInputSchema;




exports.TopicOrderByRelationAggregateInputSchema = TopicOrderByRelationAggregateInputSchema; exports.TopicOrderByRelationAggregateInputSchema_default = TopicOrderByRelationAggregateInputSchema_default;
//# sourceMappingURL=chunk-GHATGBV5.cjs.map