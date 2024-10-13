"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS6NGGFC7cjs = require('./chunk-S6NGGFC7.cjs');


var _chunkRKN3PL4Ycjs = require('./chunk-RKN3PL4Y.cjs');











var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkM3KGLYTHcjs = require('./chunk-M3KGLYTH.cjs');


var _chunkL6CTJFPTcjs = require('./chunk-L6CTJFPT.cjs');

// src/database/outputTypeSchemas/TopicUpdateArgsSchema.ts
var _zod = require('zod');
var TopicSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoListFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkM3KGLYTHcjs.TopicCountOutputTypeArgsSchema)]).optional()
}).strict();
var TopicUpdateArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.TopicIncludeSchema.optional(),
  data: _zod.z.union([_chunkRKN3PL4Ycjs.TopicUpdateInputSchema, _chunkS6NGGFC7cjs.TopicUncheckedUpdateInputSchema]),
  where: _chunkL6CTJFPTcjs.TopicWhereUniqueInputSchema
}).strict();
var TopicUpdateArgsSchema_default = TopicUpdateArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicUpdateArgsSchema = TopicUpdateArgsSchema; exports.TopicUpdateArgsSchema_default = TopicUpdateArgsSchema_default;
//# sourceMappingURL=chunk-EV2YA3QS.cjs.map