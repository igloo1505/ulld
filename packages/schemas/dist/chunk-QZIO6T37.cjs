"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkW64QSDEWcjs = require('./chunk-W64QSDEW.cjs');


var _chunkDJGN4EZXcjs = require('./chunk-DJGN4EZX.cjs');

// src/database/outputTypeSchemas/ToDoListFindUniqueArgsSchema.ts
var _zod = require('zod');
var ToDoListSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  tasks: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  tags: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TagFindManyArgsSchema)]).optional(),
  topics: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.TopicFindManyArgsSchema)]).optional(),
  subjects: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.SubjectFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkW64QSDEWcjs.ToDoListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoListFindUniqueArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ToDoListIncludeSchema.optional(),
  where: _chunkDJGN4EZXcjs.ToDoListWhereUniqueInputSchema
}).strict();
var ToDoListFindUniqueArgsSchema_default = ToDoListFindUniqueArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListFindUniqueArgsSchema = ToDoListFindUniqueArgsSchema; exports.ToDoListFindUniqueArgsSchema_default = ToDoListFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-QZIO6T37.cjs.map