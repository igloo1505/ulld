"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYHOEGYXLcjs = require('./chunk-YHOEGYXL.cjs');


var _chunkNJO565BYcjs = require('./chunk-NJO565BY.cjs');


var _chunkROAWKH5Qcjs = require('./chunk-ROAWKH5Q.cjs');


var _chunkL3IUB3K6cjs = require('./chunk-L3IUB3K6.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5VQFSS65cjs = require('./chunk-5VQFSS65.cjs');


var _chunkMIDX2PX6cjs = require('./chunk-MIDX2PX6.cjs');

// src/database/outputTypeSchemas/TopicUpsertArgsSchema.ts
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
var TopicUpsertArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TopicIncludeSchema.optional(),
  where: _chunkMIDX2PX6cjs.TopicWhereUniqueInputSchema,
  create: _zod.z.union([_chunkYHOEGYXLcjs.TopicCreateInputSchema, _chunkNJO565BYcjs.TopicUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkL3IUB3K6cjs.TopicUpdateInputSchema, _chunkROAWKH5Qcjs.TopicUncheckedUpdateInputSchema])
}).strict();
var TopicUpsertArgsSchema_default = TopicUpsertArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicUpsertArgsSchema = TopicUpsertArgsSchema; exports.TopicUpsertArgsSchema_default = TopicUpsertArgsSchema_default;
//# sourceMappingURL=chunk-XODEI7X5.cjs.map