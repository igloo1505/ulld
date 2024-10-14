"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQPPUZ4VEcjs = require('./chunk-QPPUZ4VE.cjs');


var _chunk3A4Y3G6Ycjs = require('./chunk-3A4Y3G6Y.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkIUZEYFDJcjs = require('./chunk-IUZEYFDJ.cjs');

// src/database/outputTypeSchemas/TagCreateArgsSchema.ts
var _zod = require('zod');
var TagSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkIUZEYFDJcjs.TagCountOutputTypeArgsSchema)]).optional()
}).strict();
var TagCreateArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TagIncludeSchema.optional(),
  data: _zod.z.union([_chunkQPPUZ4VEcjs.TagCreateInputSchema, _chunk3A4Y3G6Ycjs.TagUncheckedCreateInputSchema])
}).strict();
var TagCreateArgsSchema_default = TagCreateArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagCreateArgsSchema = TagCreateArgsSchema; exports.TagCreateArgsSchema_default = TagCreateArgsSchema_default;
//# sourceMappingURL=chunk-EVOO2657.cjs.map