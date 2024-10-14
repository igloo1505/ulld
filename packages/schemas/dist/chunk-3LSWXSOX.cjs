"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLWNBIM3Jcjs = require('./chunk-LWNBIM3J.cjs');


var _chunk3CV3QFGPcjs = require('./chunk-3CV3QFGP.cjs');


var _chunkIT2RFXH6cjs = require('./chunk-IT2RFXH6.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoListGroupByArgsSchema.ts
var _zod = require('zod');
var ToDoListGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ToDoListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkLWNBIM3Jcjs.ToDoListOrderByWithAggregationInputSchema.array(), _chunkLWNBIM3Jcjs.ToDoListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkIT2RFXH6cjs.ToDoListScalarFieldEnumSchema.array(),
  having: _chunk3CV3QFGPcjs.ToDoListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoListGroupByArgsSchema_default = ToDoListGroupByArgsSchema;




exports.ToDoListGroupByArgsSchema = ToDoListGroupByArgsSchema; exports.ToDoListGroupByArgsSchema_default = ToDoListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-3LSWXSOX.cjs.map