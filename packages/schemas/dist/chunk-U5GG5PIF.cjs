"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHRAYFIRTcjs = require('./chunk-HRAYFIRT.cjs');


var _chunkGMMYXD2Icjs = require('./chunk-GMMYXD2I.cjs');


var _chunk7AYYY72Xcjs = require('./chunk-7AYYY72X.cjs');


var _chunkWCWOZNW5cjs = require('./chunk-WCWOZNW5.cjs');


var _chunkPCM3GZDJcjs = require('./chunk-PCM3GZDJ.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunk2BCAHLSYcjs = require('./chunk-2BCAHLSY.cjs');


var _chunkTLP7GBT6cjs = require('./chunk-TLP7GBT6.cjs');


var _chunkWFX3WPX4cjs = require('./chunk-WFX3WPX4.cjs');


var _chunkPFR3DM6Ocjs = require('./chunk-PFR3DM6O.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var TagOrderByWithRelationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkTLP7GBT6cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkWCWOZNW5cjs.QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkPCM3GZDJcjs.PracticeExamOrderByRelationAggregateInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk2BCAHLSYcjs.EquationOrderByRelationAggregateInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkPFR3DM6Ocjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkGMMYXD2Icjs.ToDoListOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkHRAYFIRTcjs.TagOrderByRelevanceInputSchema).optional()
}).strict();
var TagOrderByWithRelationInputSchema_default = TagOrderByWithRelationInputSchema;




exports.TagOrderByWithRelationInputSchema = TagOrderByWithRelationInputSchema; exports.TagOrderByWithRelationInputSchema_default = TagOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-U5GG5PIF.cjs.map