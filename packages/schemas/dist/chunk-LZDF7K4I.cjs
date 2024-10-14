"use strict";Object.defineProperty(exports, "__esModule", {value: true});





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkTW55HWVYcjs = require('./chunk-TW55HWVY.cjs');


var _chunkKWKYQJTYcjs = require('./chunk-KWKYQJTY.cjs');


var _chunkF22WIE72cjs = require('./chunk-F22WIE72.cjs');


var _chunkIT2RFXH6cjs = require('./chunk-IT2RFXH6.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoListFindFirstOrThrowArgsSchema.ts
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
var ToDoListFindFirstOrThrowArgsSchema = _zod.z.object({
  select: ToDoListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ToDoListIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkF22WIE72cjs.ToDoListOrderByWithRelationInputSchema.array(), _chunkF22WIE72cjs.ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkKWKYQJTYcjs.ToDoListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkIT2RFXH6cjs.ToDoListScalarFieldEnumSchema, _chunkIT2RFXH6cjs.ToDoListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ToDoListFindFirstOrThrowArgsSchema_default = ToDoListFindFirstOrThrowArgsSchema;





exports.ToDoListSelectSchema = ToDoListSelectSchema; exports.ToDoListFindFirstOrThrowArgsSchema = ToDoListFindFirstOrThrowArgsSchema; exports.ToDoListFindFirstOrThrowArgsSchema_default = ToDoListFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-LZDF7K4I.cjs.map