"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoOrderByRelationAggregateInputSchema.ts
var _zod = require('zod');
var ToDoOrderByRelationAggregateInputSchema = _zod.z.object({
  _count: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var ToDoOrderByRelationAggregateInputSchema_default = ToDoOrderByRelationAggregateInputSchema;




exports.ToDoOrderByRelationAggregateInputSchema = ToDoOrderByRelationAggregateInputSchema; exports.ToDoOrderByRelationAggregateInputSchema_default = ToDoOrderByRelationAggregateInputSchema_default;
//# sourceMappingURL=chunk-PFR3DM6O.cjs.map