"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkELQ6XTXMcjs = require('./chunk-ELQ6XTXM.cjs');


var _chunkJ7D4EWWScjs = require('./chunk-J7D4EWWS.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGVJUMM3Ccjs = require('./chunk-GVJUMM3C.cjs');


var _chunkTYJ6HJJAcjs = require('./chunk-TYJ6HJJA.cjs');

// src/database/outputTypeSchemas/SubjectUpdateArgsSchema.ts
var _zod = require('zod');
var SubjectSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  IpynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  QaPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.PracticeExamFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoListFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkGVJUMM3Ccjs.SubjectCountOutputTypeArgsSchema)]).optional()
}).strict();
var SubjectUpdateArgsSchema = _zod.z.object({
  select: SubjectSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SubjectIncludeSchema.optional(),
  data: _zod.z.union([_chunkJ7D4EWWScjs.SubjectUpdateInputSchema, _chunkELQ6XTXMcjs.SubjectUncheckedUpdateInputSchema]),
  where: _chunkTYJ6HJJAcjs.SubjectWhereUniqueInputSchema
}).strict();
var SubjectUpdateArgsSchema_default = SubjectUpdateArgsSchema;





exports.SubjectSelectSchema = SubjectSelectSchema; exports.SubjectUpdateArgsSchema = SubjectUpdateArgsSchema; exports.SubjectUpdateArgsSchema_default = SubjectUpdateArgsSchema_default;
//# sourceMappingURL=chunk-J7IA3A2D.cjs.map