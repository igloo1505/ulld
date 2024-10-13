"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDZAGXWX4cjs = require('./chunk-DZAGXWX4.cjs');


var _chunkEW5SJVQ3cjs = require('./chunk-EW5SJVQ3.cjs');


var _chunkXZVIKWYKcjs = require('./chunk-XZVIKWYK.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoGroupByArgsSchema.ts
var _zod = require('zod');
var ToDoGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ToDoWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEW5SJVQ3cjs.ToDoOrderByWithAggregationInputSchema.array(), _chunkEW5SJVQ3cjs.ToDoOrderByWithAggregationInputSchema]).optional(),
  by: _chunkXZVIKWYKcjs.ToDoScalarFieldEnumSchema.array(),
  having: _chunkDZAGXWX4cjs.ToDoScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoGroupByArgsSchema_default = ToDoGroupByArgsSchema;




exports.ToDoGroupByArgsSchema = ToDoGroupByArgsSchema; exports.ToDoGroupByArgsSchema_default = ToDoGroupByArgsSchema_default;
//# sourceMappingURL=chunk-EZJA7CJD.cjs.map