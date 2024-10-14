"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSUA6P3DUcjs = require('./chunk-SUA6P3DU.cjs');


var _chunkDKFXZBPEcjs = require('./chunk-DKFXZBPE.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoAggregateArgsSchema.ts
var _zod = require('zod');
var ToDoAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.ToDoWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkSUA6P3DUcjs.ToDoOrderByWithRelationInputSchema.array(), _chunkSUA6P3DUcjs.ToDoOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDKFXZBPEcjs.ToDoWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var ToDoAggregateArgsSchema_default = ToDoAggregateArgsSchema;




exports.ToDoAggregateArgsSchema = ToDoAggregateArgsSchema; exports.ToDoAggregateArgsSchema_default = ToDoAggregateArgsSchema_default;
//# sourceMappingURL=chunk-B5466WZS.cjs.map