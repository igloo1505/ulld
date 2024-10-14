"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTC7IPEHRcjs = require('./chunk-TC7IPEHR.cjs');


var _chunkZ4GBXOFBcjs = require('./chunk-Z4GBXOFB.cjs');


var _chunkC3625BFYcjs = require('./chunk-C3625BFY.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoGroupByArgsSchema.ts
var _zod = require('zod');
var ToDoGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ToDoWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZ4GBXOFBcjs.ToDoOrderByWithAggregationInputSchema.array(), _chunkZ4GBXOFBcjs.ToDoOrderByWithAggregationInputSchema]).optional(),
  by: _chunkC3625BFYcjs.ToDoScalarFieldEnumSchema.array(),
  having: _chunkTC7IPEHRcjs.ToDoScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoGroupByArgsSchema_default = ToDoGroupByArgsSchema;




exports.ToDoGroupByArgsSchema = ToDoGroupByArgsSchema; exports.ToDoGroupByArgsSchema_default = ToDoGroupByArgsSchema_default;
//# sourceMappingURL=chunk-YL7LO44F.cjs.map