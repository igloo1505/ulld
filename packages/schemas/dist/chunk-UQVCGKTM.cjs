"use strict";Object.defineProperty(exports, "__esModule", {value: true});










var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkU5GG5PIFcjs = require('./chunk-U5GG5PIF.cjs');


var _chunk34Z33UXCcjs = require('./chunk-34Z33UXC.cjs');


var _chunk2AUP6Z3Jcjs = require('./chunk-2AUP6Z3J.cjs');


var _chunkPQT5SOF6cjs = require('./chunk-PQT5SOF6.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TagFindFirstArgsSchema.ts
var _zod = require('zod');
var TagSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  kanbanId: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastAccess: _zod.z.boolean().optional(),
  MdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  QAPair: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.QAPairFindManyArgsSchema)]).optional(),
  practiceExam: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.PracticeExamFindManyArgsSchema)]).optional(),
  equations: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.EquationFindManyArgsSchema)]).optional(),
  toDo: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanbanArgsSchema)]).optional(),
  todoList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.ToDoListFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2AUP6Z3Jcjs.TagCountOutputTypeArgsSchema)]).optional()
}).strict();
var TagFindFirstArgsSchema = _zod.z.object({
  select: TagSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.TagIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkU5GG5PIFcjs.TagOrderByWithRelationInputSchema.array(), _chunkU5GG5PIFcjs.TagOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk34Z33UXCcjs.TagWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkPQT5SOF6cjs.TagScalarFieldEnumSchema, _chunkPQT5SOF6cjs.TagScalarFieldEnumSchema.array()]).optional()
}).strict();
var TagFindFirstArgsSchema_default = TagFindFirstArgsSchema;





exports.TagSelectSchema = TagSelectSchema; exports.TagFindFirstArgsSchema = TagFindFirstArgsSchema; exports.TagFindFirstArgsSchema_default = TagFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-UQVCGKTM.cjs.map