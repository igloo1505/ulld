"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVACLIKDIcjs = require('./chunk-VACLIKDI.cjs');


var _chunkORW6TMJPcjs = require('./chunk-ORW6TMJP.cjs');











var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGVJUMM3Ccjs = require('./chunk-GVJUMM3C.cjs');

// src/database/outputTypeSchemas/SubjectCreateArgsSchema.ts
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
var SubjectCreateArgsSchema = _zod.z.object({
  select: SubjectSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SubjectIncludeSchema.optional(),
  data: _zod.z.union([_chunkVACLIKDIcjs.SubjectCreateInputSchema, _chunkORW6TMJPcjs.SubjectUncheckedCreateInputSchema])
}).strict();
var SubjectCreateArgsSchema_default = SubjectCreateArgsSchema;





exports.SubjectSelectSchema = SubjectSelectSchema; exports.SubjectCreateArgsSchema = SubjectCreateArgsSchema; exports.SubjectCreateArgsSchema_default = SubjectCreateArgsSchema_default;
//# sourceMappingURL=chunk-ZPBBAQW2.cjs.map