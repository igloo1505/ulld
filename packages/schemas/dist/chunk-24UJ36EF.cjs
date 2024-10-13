"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCVOLWCAEcjs = require('./chunk-CVOLWCAE.cjs');


var _chunkVLW2RK4Ucjs = require('./chunk-VLW2RK4U.cjs');


var _chunkDUQOYQ2Rcjs = require('./chunk-DUQOYQ2R.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoListGroupByArgsSchema.ts
var _zod = require('zod');
var ToDoListGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkCVOLWCAEcjs.ToDoListOrderByWithAggregationInputSchema.array(), _chunkCVOLWCAEcjs.ToDoListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkDUQOYQ2Rcjs.ToDoListScalarFieldEnumSchema.array(),
  having: _chunkVLW2RK4Ucjs.ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoListGroupByArgsSchema_default = ToDoListGroupByArgsSchema;




exports.ToDoListGroupByArgsSchema = ToDoListGroupByArgsSchema; exports.ToDoListGroupByArgsSchema_default = ToDoListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-24UJ36EF.cjs.map