"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5VQFSS65cjs = require('./chunk-5VQFSS65.cjs');


var _chunkZ5NG7FWIcjs = require('./chunk-Z5NG7FWI.cjs');


var _chunkMIDX2PX6cjs = require('./chunk-MIDX2PX6.cjs');


var _chunkM5TYQKMKcjs = require('./chunk-M5TYQKMK.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TopicFindFirstArgsSchema.ts
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
var TopicFindFirstArgsSchema = _zod.z.object({
  select: TopicSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TopicIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.TopicWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZ5NG7FWIcjs.TopicOrderByWithRelationInputSchema.array(), _chunkZ5NG7FWIcjs.TopicOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkMIDX2PX6cjs.TopicWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkM5TYQKMKcjs.TopicScalarFieldEnumSchema, _chunkM5TYQKMKcjs.TopicScalarFieldEnumSchema.array()]).optional()
}).strict();
var TopicFindFirstArgsSchema_default = TopicFindFirstArgsSchema;





exports.TopicSelectSchema = TopicSelectSchema; exports.TopicFindFirstArgsSchema = TopicFindFirstArgsSchema; exports.TopicFindFirstArgsSchema_default = TopicFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-RAQSPC2D.cjs.map