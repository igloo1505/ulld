"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkTW55HWVYcjs = require('./chunk-TW55HWVY.cjs');


var _chunkKWKYQJTYcjs = require('./chunk-KWKYQJTY.cjs');

// src/database/outputTypeSchemas/ToDoListFindUniqueArgsSchema.ts
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
var ToDoListFindUniqueArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoListIncludeSchema.optional(),
  where: _chunkKWKYQJTYcjs.ToDoListWhereUniqueInputSchema
}).strict();
var ToDoListFindUniqueArgsSchema_default = ToDoListFindUniqueArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListFindUniqueArgsSchema = ToDoListFindUniqueArgsSchema; exports.ToDoListFindUniqueArgsSchema_default = ToDoListFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-VI5OVQSN.cjs.map