"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkHS2KXA2Hcjs = require('./chunk-HS2KXA2H.cjs');


var _chunkJJWTT57Icjs = require('./chunk-JJWTT57I.cjs');


var _chunkIUZEYFDJcjs = require('./chunk-IUZEYFDJ.cjs');


var _chunkEWYL3WMScjs = require('./chunk-EWYL3WMS.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TagFindFirstOrThrowArgsSchema.ts
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
var TagFindFirstOrThrowArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.TagIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkHS2KXA2Hcjs.TagOrderByWithRelationInputSchema.array(), _chunkHS2KXA2Hcjs.TagOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJJWTT57Icjs.TagWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkEWYL3WMScjs.TagScalarFieldEnumSchema, _chunkEWYL3WMScjs.TagScalarFieldEnumSchema.array()]).optional()
}).strict();
var TagFindFirstOrThrowArgsSchema_default = TagFindFirstOrThrowArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagFindFirstOrThrowArgsSchema = TagFindFirstOrThrowArgsSchema; exports.TagFindFirstOrThrowArgsSchema_default = TagFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-PKXL4D52.cjs.map