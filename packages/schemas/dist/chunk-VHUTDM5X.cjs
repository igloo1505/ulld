"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVMOMOEOOcjs = require('./chunk-VMOMOEOO.cjs');


var _chunkWYIE7N3Jcjs = require('./chunk-WYIE7N3J.cjs');









var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkORIQYYFYcjs = require('./chunk-ORIQYYFY.cjs');

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
  associatedNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  parent: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoArgsSchema)]).optional(),
  child: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  ToDoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoListArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkORIQYYFYcjs.ToDoCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoCreateArgsSchema = _zod.z.object({
  select: ToDoSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ToDoIncludeSchema.optional(),
  data: _zod.z.union([_chunkVMOMOEOOcjs.ToDoCreateInputSchema, _chunkWYIE7N3Jcjs.ToDoUncheckedCreateInputSchema])
}).strict();
var ToDoCreateArgsSchema_default = ToDoCreateArgsSchema;





exports.ToDoSelectSchema = ToDoSelectSchema; exports.ToDoCreateArgsSchema = ToDoCreateArgsSchema; exports.ToDoCreateArgsSchema_default = ToDoCreateArgsSchema_default;
//# sourceMappingURL=chunk-VHUTDM5X.cjs.map