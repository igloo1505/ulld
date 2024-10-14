"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUPSCNT67cjs = require('./chunk-UPSCNT67.cjs');


var _chunkWEJ6BP3Lcjs = require('./chunk-WEJ6BP3L.cjs');


var _chunk5EXBJ3NHcjs = require('./chunk-5EXBJ3NH.cjs');


var _chunk2RLLNNEJcjs = require('./chunk-2RLLNNEJ.cjs');









var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5E7NBUX4cjs = require('./chunk-5E7NBUX4.cjs');


var _chunkDKFXZBPEcjs = require('./chunk-DKFXZBPE.cjs');

// src/database/outputTypeSchemas/ToDoUpsertArgsSchema.ts
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
var ToDoUpsertArgsSchema = _zod.z.object({
  select: ToDoSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoIncludeSchema.optional(),
  where: _chunkDKFXZBPEcjs.ToDoWhereUniqueInputSchema,
  create: _zod.z.union([_chunkUPSCNT67cjs.ToDoCreateInputSchema, _chunkWEJ6BP3Lcjs.ToDoUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk2RLLNNEJcjs.ToDoUpdateInputSchema, _chunk5EXBJ3NHcjs.ToDoUncheckedUpdateInputSchema])
}).strict();
var ToDoUpsertArgsSchema_default = ToDoUpsertArgsSchema;





exports.ToDoSelectSchema = ToDoSelectSchema; exports.ToDoUpsertArgsSchema = ToDoUpsertArgsSchema; exports.ToDoUpsertArgsSchema_default = ToDoUpsertArgsSchema_default;
//# sourceMappingURL=chunk-JRUNUOHX.cjs.map