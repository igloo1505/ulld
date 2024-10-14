"use strict";Object.defineProperty(exports, "__esModule", {value: true});








var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5E7NBUX4cjs = require('./chunk-5E7NBUX4.cjs');


var _chunkSUA6P3DUcjs = require('./chunk-SUA6P3DU.cjs');


var _chunkDKFXZBPEcjs = require('./chunk-DKFXZBPE.cjs');


var _chunkC3625BFYcjs = require('./chunk-C3625BFY.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoFindFirstArgsSchema.ts
var _zod = require('zod');
var ToDoSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  task: _zod.z.boolean().optional(),
  dueAt: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  parentId: _zod.z.boolean().optional(),
  category: _zod.z.boolean().optional(),
  bookmarked: _zod.z.boolean().optional(),
  status: _zod.z.boolean().optional(),
  priority: _zod.z.boolean().optional(),
  toDoListId: _zod.z.boolean().optional(),
  completedOn: _zod.z.boolean().optional(),
  associatedNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  parent: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoArgsSchema)]).optional(),
  child: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  ToDoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoListArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk5E7NBUX4cjs.ToDoCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoFindFirstArgsSchema = _zod.z.object({
  select: ToDoSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.ToDoWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkSUA6P3DUcjs.ToDoOrderByWithRelationInputSchema.array(), _chunkSUA6P3DUcjs.ToDoOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDKFXZBPEcjs.ToDoWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkC3625BFYcjs.ToDoScalarFieldEnumSchema, _chunkC3625BFYcjs.ToDoScalarFieldEnumSchema.array()]).optional()
}).strict();
var ToDoFindFirstArgsSchema_default = ToDoFindFirstArgsSchema;





exports.ToDoSelectSchema = ToDoSelectSchema; exports.ToDoFindFirstArgsSchema = ToDoFindFirstArgsSchema; exports.ToDoFindFirstArgsSchema_default = ToDoFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-JP7JEPCF.cjs.map