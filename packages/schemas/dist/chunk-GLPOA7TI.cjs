"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJJB2Z6JQcjs = require('./chunk-JJB2Z6JQ.cjs');


var _chunkPBJ42KJEcjs = require('./chunk-PBJ42KJE.cjs');


var _chunkF5R7ACEYcjs = require('./chunk-F5R7ACEY.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanbanGroupByArgsSchema.ts
var _zod = require('zod');
var KanbanGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.KanbanWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPBJ42KJEcjs.KanbanOrderByWithAggregationInputSchema.array(), _chunkPBJ42KJEcjs.KanbanOrderByWithAggregationInputSchema]).optional(),
  by: _chunkF5R7ACEYcjs.KanbanScalarFieldEnumSchema.array(),
  having: _chunkJJB2Z6JQcjs.KanbanScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var KanbanGroupByArgsSchema_default = KanbanGroupByArgsSchema;




exports.KanbanGroupByArgsSchema = KanbanGroupByArgsSchema; exports.KanbanGroupByArgsSchema_default = KanbanGroupByArgsSchema_default;
//# sourceMappingURL=chunk-GLPOA7TI.cjs.map