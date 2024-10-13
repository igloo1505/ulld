"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkZVUIULP6cjs = require('./chunk-ZVUIULP6.cjs');


var _chunk4DMFWQGRcjs = require('./chunk-4DMFWQGR.cjs');


var _chunk4LGFP2M4cjs = require('./chunk-4LGFP2M4.cjs');


var _chunkOZJRZ5I4cjs = require('./chunk-OZJRZ5I4.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SubjectFindFirstOrThrowArgsSchema.ts
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
var SubjectFindFirstOrThrowArgsSchema = _zod.z.object({
  select: SubjectSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SubjectIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4DMFWQGRcjs.SubjectOrderByWithRelationInputSchema.array(), _chunk4DMFWQGRcjs.SubjectOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk4LGFP2M4cjs.SubjectWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOZJRZ5I4cjs.SubjectScalarFieldEnumSchema, _chunkOZJRZ5I4cjs.SubjectScalarFieldEnumSchema.array()]).optional()
}).strict();
var SubjectFindFirstOrThrowArgsSchema_default = SubjectFindFirstOrThrowArgsSchema;





exports.SubjectSelectSchema = SubjectSelectSchema; exports.SubjectFindFirstOrThrowArgsSchema = SubjectFindFirstOrThrowArgsSchema; exports.SubjectFindFirstOrThrowArgsSchema_default = SubjectFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-N5Z3CFYK.cjs.map