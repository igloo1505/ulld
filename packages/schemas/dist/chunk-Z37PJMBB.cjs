"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUPSCNT67cjs = require('./chunk-UPSCNT67.cjs');


var _chunkWEJ6BP3Lcjs = require('./chunk-WEJ6BP3L.cjs');









var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk5E7NBUX4cjs = require('./chunk-5E7NBUX4.cjs');

// src/database/outputTypeSchemas/ToDoCreateArgsSchema.ts
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
var ToDoCreateArgsSchema = _zod.z.object({
  select: ToDoSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoIncludeSchema.optional(),
  data: _zod.z.union([_chunkUPSCNT67cjs.ToDoCreateInputSchema, _chunkWEJ6BP3Lcjs.ToDoUncheckedCreateInputSchema])
}).strict();
var ToDoCreateArgsSchema_default = ToDoCreateArgsSchema;





exports.ToDoSelectSchema = ToDoSelectSchema; exports.ToDoCreateArgsSchema = ToDoCreateArgsSchema; exports.ToDoCreateArgsSchema_default = ToDoCreateArgsSchema_default;
//# sourceMappingURL=chunk-Z37PJMBB.cjs.map