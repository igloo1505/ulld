"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkW64QSDEWcjs = require('./chunk-W64QSDEW.cjs');


var _chunkDJGN4EZXcjs = require('./chunk-DJGN4EZX.cjs');


var _chunk3BGCPR2Lcjs = require('./chunk-3BGCPR2L.cjs');


var _chunkDUQOYQ2Rcjs = require('./chunk-DUQOYQ2R.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoListFindFirstOrThrowArgsSchema.ts
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
var ToDoListFindFirstOrThrowArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ToDoListIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk3BGCPR2Lcjs.ToDoListOrderByWithRelationInputSchema.array(), _chunk3BGCPR2Lcjs.ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDJGN4EZXcjs.ToDoListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkDUQOYQ2Rcjs.ToDoListScalarFieldEnumSchema, _chunkDUQOYQ2Rcjs.ToDoListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ToDoListFindFirstOrThrowArgsSchema_default = ToDoListFindFirstOrThrowArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListFindFirstOrThrowArgsSchema = ToDoListFindFirstOrThrowArgsSchema; exports.ToDoListFindFirstOrThrowArgsSchema_default = ToDoListFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-IKXKCVDT.cjs.map