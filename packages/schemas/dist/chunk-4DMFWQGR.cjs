"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBNPUHKLRcjs = require('./chunk-BNPUHKLR.cjs');


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

// src/database/inputTypeSchemas/SubjectOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SubjectOrderByWithRelationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => _chunkTLP7GBT6cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  QaPair: _zod.z.lazy(() => _chunkWCWOZNW5cjs.QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunkPCM3GZDJcjs.PracticeExamOrderByRelationAggregateInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunk7AYYY72Xcjs.KanbanOrderByWithRelationInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkGMMYXD2Icjs.ToDoListOrderByRelationAggregateInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkPFR3DM6Ocjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk2BCAHLSYcjs.EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkBNPUHKLRcjs.SubjectOrderByRelevanceInputSchema).optional()
}).strict();
var SubjectOrderByWithRelationInputSchema_default = SubjectOrderByWithRelationInputSchema;




exports.SubjectOrderByWithRelationInputSchema = SubjectOrderByWithRelationInputSchema; exports.SubjectOrderByWithRelationInputSchema_default = SubjectOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-4DMFWQGR.cjs.map