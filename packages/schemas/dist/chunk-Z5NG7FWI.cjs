"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH44CUD5Ucjs = require('./chunk-H44CUD5U.cjs');


var _chunkJXDF2DT6cjs = require('./chunk-JXDF2DT6.cjs');


var _chunkAYLQOMLKcjs = require('./chunk-AYLQOMLK.cjs');


var _chunkFCKLEIAXcjs = require('./chunk-FCKLEIAX.cjs');


var _chunk3QA5HH7Zcjs = require('./chunk-3QA5HH7Z.cjs');


var _chunk5ICBN4HXcjs = require('./chunk-5ICBN4HX.cjs');


var _chunkLTFRFA5Ocjs = require('./chunk-LTFRFA5O.cjs');


var _chunkF5EPMKX4cjs = require('./chunk-F5EPMKX4.cjs');


var _chunkMGQZW2V6cjs = require('./chunk-MGQZW2V6.cjs');


var _chunkGNGCDLLMcjs = require('./chunk-GNGCDLLM.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var TopicOrderByWithRelationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  MdxNotes: _zod.z.lazy(() => _chunkMGQZW2V6cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF5EPMKX4cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  QAPair: _zod.z.lazy(() => _chunkFCKLEIAXcjs.QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: _zod.z.lazy(() => _chunk3QA5HH7Zcjs.PracticeExamOrderByRelationAggregateInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkGNGCDLLMcjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  Kanban: _zod.z.lazy(() => _chunkAYLQOMLKcjs.KanbanOrderByWithRelationInputSchema).optional(),
  todoList: _zod.z.lazy(() => _chunkJXDF2DT6cjs.ToDoListOrderByRelationAggregateInputSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk5ICBN4HXcjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunkLTFRFA5Ocjs.EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkH44CUD5Ucjs.TopicOrderByRelevanceInputSchema).optional()
}).strict();
var TopicOrderByWithRelationInputSchema_default = TopicOrderByWithRelationInputSchema;




exports.TopicOrderByWithRelationInputSchema = TopicOrderByWithRelationInputSchema; exports.TopicOrderByWithRelationInputSchema_default = TopicOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-Z5NG7FWI.cjs.map