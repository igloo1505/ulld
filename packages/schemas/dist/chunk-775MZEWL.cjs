"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5VQFSS65cjs = require('./chunk-5VQFSS65.cjs');


var _chunkMIDX2PX6cjs = require('./chunk-MIDX2PX6.cjs');

// src/database/outputTypeSchemas/TopicFindUniqueArgsSchema.ts
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
var TopicFindUniqueArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TopicIncludeSchema.optional(),
  where: _chunkMIDX2PX6cjs.TopicWhereUniqueInputSchema
}).strict();
var TopicFindUniqueArgsSchema_default = TopicFindUniqueArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicFindUniqueArgsSchema = TopicFindUniqueArgsSchema; exports.TopicFindUniqueArgsSchema_default = TopicFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-775MZEWL.cjs.map