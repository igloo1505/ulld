"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVMIYOIWJcjs = require('./chunk-VMIYOIWJ.cjs');


var _chunkVVO4LR3Xcjs = require('./chunk-VVO4LR3X.cjs');






var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkTW55HWVYcjs = require('./chunk-TW55HWVY.cjs');

// src/database/outputTypeSchemas/ToDoListCreateArgsSchema.ts
var _zod = require('zod');
var ToDoListSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  tasks: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.ToDoFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.SubjectFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkTW55HWVYcjs.ToDoListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoListCreateArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoListIncludeSchema.optional(),
  data: _zod.z.union([_chunkVMIYOIWJcjs.ToDoListCreateInputSchema, _chunkVVO4LR3Xcjs.ToDoListUncheckedCreateInputSchema])
}).strict();
var ToDoListCreateArgsSchema_default = ToDoListCreateArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListCreateArgsSchema = ToDoListCreateArgsSchema; exports.ToDoListCreateArgsSchema_default = ToDoListCreateArgsSchema_default;
//# sourceMappingURL=chunk-EUMOULHO.cjs.map