"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk34Z33UXCcjs = require('./chunk-34Z33UXC.cjs');


var _chunk2AUP6Z3Jcjs = require('./chunk-2AUP6Z3J.cjs');

// src/database/outputTypeSchemas/TagFindUniqueOrThrowArgsSchema.ts
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
var TagFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.TagIncludeSchema.optional(),
  where: _chunk34Z33UXCcjs.TagWhereUniqueInputSchema
}).strict();
var TagFindUniqueOrThrowArgsSchema_default = TagFindUniqueOrThrowArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagFindUniqueOrThrowArgsSchema = TagFindUniqueOrThrowArgsSchema; exports.TagFindUniqueOrThrowArgsSchema_default = TagFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-7KZL4SM3.cjs.map