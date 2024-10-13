"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBQT5D4EXcjs = require('./chunk-BQT5D4EX.cjs');


var _chunk5XYVDMEOcjs = require('./chunk-5XYVDMEO.cjs');






var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkW64QSDEWcjs = require('./chunk-W64QSDEW.cjs');

// src/database/outputTypeSchemas/ToDoListCreateArgsSchema.ts
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
var ToDoListCreateArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ToDoListIncludeSchema.optional(),
  data: _zod.z.union([_chunkBQT5D4EXcjs.ToDoListCreateInputSchema, _chunk5XYVDMEOcjs.ToDoListUncheckedCreateInputSchema])
}).strict();
var ToDoListCreateArgsSchema_default = ToDoListCreateArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListCreateArgsSchema = ToDoListCreateArgsSchema; exports.ToDoListCreateArgsSchema_default = ToDoListCreateArgsSchema_default;
//# sourceMappingURL=chunk-Y2ZRXZ5R.cjs.map