"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4ESDQH7Ocjs = require('./chunk-4ESDQH7O.cjs');


var _chunkH2WQLFSVcjs = require('./chunk-H2WQLFSV.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoAggregateArgsSchema.ts
var _zod = require('zod');
var ToDoAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ToDoWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4ESDQH7Ocjs.ToDoOrderByWithRelationInputSchema.array(), _chunk4ESDQH7Ocjs.ToDoOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkH2WQLFSVcjs.ToDoWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoAggregateArgsSchema_default = ToDoAggregateArgsSchema;




exports.ToDoAggregateArgsSchema = ToDoAggregateArgsSchema; exports.ToDoAggregateArgsSchema_default = ToDoAggregateArgsSchema_default;
//# sourceMappingURL=chunk-RVNW5Z3N.cjs.map