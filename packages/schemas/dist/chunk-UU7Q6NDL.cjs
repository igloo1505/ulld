"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKWKYQJTYcjs = require('./chunk-KWKYQJTY.cjs');


var _chunkF22WIE72cjs = require('./chunk-F22WIE72.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoListAggregateArgsSchema.ts
var _zod = require('zod');
var ToDoListAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkF22WIE72cjs.ToDoListOrderByWithRelationInputSchema.array(), _chunkF22WIE72cjs.ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkKWKYQJTYcjs.ToDoListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoListAggregateArgsSchema_default = ToDoListAggregateArgsSchema;




exports.ToDoListAggregateArgsSchema = ToDoListAggregateArgsSchema; exports.ToDoListAggregateArgsSchema_default = ToDoListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-UU7Q6NDL.cjs.map