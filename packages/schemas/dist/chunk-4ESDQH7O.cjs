"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZX3WYPAHcjs = require('./chunk-ZX3WYPAH.cjs');


var _chunk3BGCPR2Lcjs = require('./chunk-3BGCPR2L.cjs');


var _chunkWFX3WPX4cjs = require('./chunk-WFX3WPX4.cjs');


var _chunkPFR3DM6Ocjs = require('./chunk-PFR3DM6O.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ToDoOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ToDoOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  task: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  details: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  status: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  priority: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  associatedNotes: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  parent: _zod.z.lazy(() => ToDoOrderByWithRelationInputSchema).optional(),
  child: _zod.z.lazy(() => _chunkPFR3DM6Ocjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  ToDoList: _zod.z.lazy(() => _chunk3BGCPR2Lcjs.ToDoListOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkZX3WYPAHcjs.ToDoOrderByRelevanceInputSchema).optional()
}).strict();
var ToDoOrderByWithRelationInputSchema_default = ToDoOrderByWithRelationInputSchema;




exports.ToDoOrderByWithRelationInputSchema = ToDoOrderByWithRelationInputSchema; exports.ToDoOrderByWithRelationInputSchema_default = ToDoOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-4ESDQH7O.cjs.map