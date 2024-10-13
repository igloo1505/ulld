"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5TMH2TQIcjs = require('./chunk-5TMH2TQI.cjs');


var _chunkEOSHY7GGcjs = require('./chunk-EOSHY7GG.cjs');


var _chunkS6NGGFC7cjs = require('./chunk-S6NGGFC7.cjs');


var _chunkRKN3PL4Ycjs = require('./chunk-RKN3PL4Y.cjs');











var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkM3KGLYTHcjs = require('./chunk-M3KGLYTH.cjs');


var _chunkL6CTJFPTcjs = require('./chunk-L6CTJFPT.cjs');

// src/database/outputTypeSchemas/TopicUpsertArgsSchema.ts
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
var TopicUpsertArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.TopicIncludeSchema.optional(),
  where: _chunkL6CTJFPTcjs.TopicWhereUniqueInputSchema,
  create: _zod.z.union([_chunk5TMH2TQIcjs.TopicCreateInputSchema, _chunkEOSHY7GGcjs.TopicUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkRKN3PL4Ycjs.TopicUpdateInputSchema, _chunkS6NGGFC7cjs.TopicUncheckedUpdateInputSchema])
}).strict();
var TopicUpsertArgsSchema_default = TopicUpsertArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicUpsertArgsSchema = TopicUpsertArgsSchema; exports.TopicUpsertArgsSchema_default = TopicUpsertArgsSchema_default;
//# sourceMappingURL=chunk-HOH5VXBB.cjs.map