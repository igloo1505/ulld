"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkROAWKH5Qcjs = require('./chunk-ROAWKH5Q.cjs');


var _chunkL3IUB3K6cjs = require('./chunk-L3IUB3K6.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5VQFSS65cjs = require('./chunk-5VQFSS65.cjs');


var _chunkMIDX2PX6cjs = require('./chunk-MIDX2PX6.cjs');

// src/database/outputTypeSchemas/TopicUpdateArgsSchema.ts
var _zod = require('zod');
var TopicSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoListFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5VQFSS65cjs.TopicCountOutputTypeArgsSchema)]).optional()
}).strict();
var TopicUpdateArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TopicIncludeSchema.optional(),
  data: _zod.z.union([_chunkL3IUB3K6cjs.TopicUpdateInputSchema, _chunkROAWKH5Qcjs.TopicUncheckedUpdateInputSchema]),
  where: _chunkMIDX2PX6cjs.TopicWhereUniqueInputSchema
}).strict();
var TopicUpdateArgsSchema_default = TopicUpdateArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicUpdateArgsSchema = TopicUpdateArgsSchema; exports.TopicUpdateArgsSchema_default = TopicUpdateArgsSchema_default;
//# sourceMappingURL=chunk-5M6ELX4V.cjs.map