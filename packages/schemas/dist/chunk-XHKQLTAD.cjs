"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPY3SNVJFcjs = require('./chunk-PY3SNVJF.cjs');


var _chunkC6VRGJH7cjs = require('./chunk-C6VRGJH7.cjs');


var _chunkLICQCDMXcjs = require('./chunk-LICQCDMX.cjs');


var _chunkWSGTKYS2cjs = require('./chunk-WSGTKYS2.cjs');











var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkZVUIULP6cjs = require('./chunk-ZVUIULP6.cjs');


var _chunk4LGFP2M4cjs = require('./chunk-4LGFP2M4.cjs');

// src/database/outputTypeSchemas/SubjectUpsertArgsSchema.ts
var _zod = require('zod');
var SubjectSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  IpynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  QaPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoListFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkZVUIULP6cjs.SubjectCountOutputTypeArgsSchema)]).optional()
}).strict();
var SubjectUpsertArgsSchema = _zod.z.object({
  select: SubjectSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SubjectIncludeSchema.optional(),
  where: _chunk4LGFP2M4cjs.SubjectWhereUniqueInputSchema,
  create: _zod.z.union([_chunkPY3SNVJFcjs.SubjectCreateInputSchema, _chunkC6VRGJH7cjs.SubjectUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkWSGTKYS2cjs.SubjectUpdateInputSchema, _chunkLICQCDMXcjs.SubjectUncheckedUpdateInputSchema])
}).strict();
var SubjectUpsertArgsSchema_default = SubjectUpsertArgsSchema;





exports.SubjectSelectSchema = SubjectSelectSchema; exports.SubjectUpsertArgsSchema = SubjectUpsertArgsSchema; exports.SubjectUpsertArgsSchema_default = SubjectUpsertArgsSchema_default;
//# sourceMappingURL=chunk-XHKQLTAD.cjs.map