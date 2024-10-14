"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGVJUMM3Ccjs = require('./chunk-GVJUMM3C.cjs');


var _chunkZM2VLNDJcjs = require('./chunk-ZM2VLNDJ.cjs');


var _chunkTYJ6HJJAcjs = require('./chunk-TYJ6HJJA.cjs');


var _chunkAAW2AAKVcjs = require('./chunk-AAW2AAKV.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SubjectFindFirstOrThrowArgsSchema.ts
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
var SubjectFindFirstOrThrowArgsSchema = _zod.z.object({
  select: SubjectSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SubjectIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZM2VLNDJcjs.SubjectOrderByWithRelationInputSchema.array(), _chunkZM2VLNDJcjs.SubjectOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTYJ6HJJAcjs.SubjectWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkAAW2AAKVcjs.SubjectScalarFieldEnumSchema, _chunkAAW2AAKVcjs.SubjectScalarFieldEnumSchema.array()]).optional()
}).strict();
var SubjectFindFirstOrThrowArgsSchema_default = SubjectFindFirstOrThrowArgsSchema;





exports.SubjectSelectSchema = SubjectSelectSchema; exports.SubjectFindFirstOrThrowArgsSchema = SubjectFindFirstOrThrowArgsSchema; exports.SubjectFindFirstOrThrowArgsSchema_default = SubjectFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-KZ7JQMBY.cjs.map