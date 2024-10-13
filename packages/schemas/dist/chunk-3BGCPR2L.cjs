"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGT4STN4Tcjs = require('./chunk-GT4STN4T.cjs');


var _chunkPFR3DM6Ocjs = require('./chunk-PFR3DM6O.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ToDoListOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  label: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tasks: _zod.z.lazy(() => _chunkPFR3DM6Ocjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkGT4STN4Tcjs.ToDoListOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoListOrderByWithRelationInputSchema_default = ToDoListOrderByWithRelationInputSchema;




exports.ToDoListOrderByWithRelationInputSchema = ToDoListOrderByWithRelationInputSchema; exports.ToDoListOrderByWithRelationInputSchema_default = ToDoListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-3BGCPR2L.cjs.map