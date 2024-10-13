"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSZZPAYMFcjs = require('./chunk-SZZPAYMF.cjs');


var _chunkAAK2QTTOcjs = require('./chunk-AAK2QTTO.cjs');











var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk2AUP6Z3Jcjs = require('./chunk-2AUP6Z3J.cjs');

// src/database/outputTypeSchemas/TagCreateArgsSchema.ts
var _zod = require('zod');
var TagSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2AUP6Z3Jcjs.TagCountOutputTypeArgsSchema)]).optional()
}).strict();
var TagCreateArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.TagIncludeSchema.optional(),
  data: _zod.z.union([_chunkSZZPAYMFcjs.TagCreateInputSchema, _chunkAAK2QTTOcjs.TagUncheckedCreateInputSchema])
}).strict();
var TagCreateArgsSchema_default = TagCreateArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagCreateArgsSchema = TagCreateArgsSchema; exports.TagCreateArgsSchema_default = TagCreateArgsSchema_default;
//# sourceMappingURL=chunk-G2IPQGW3.cjs.map