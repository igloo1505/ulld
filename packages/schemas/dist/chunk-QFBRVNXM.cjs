"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDXQGOMEQcjs = require('./chunk-DXQGOMEQ.cjs');


var _chunkCEHTDISDcjs = require('./chunk-CEHTDISD.cjs');


var _chunk7QDGTUEQcjs = require('./chunk-7QDGTUEQ.cjs');

// src/database/outputTypeSchemas/NoteTypeAggregateArgsSchema.ts
var _zod = require('zod');
var NoteTypeAggregateArgsSchema = _zod.z.object({
  where: _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkDXQGOMEQcjs.NoteTypeOrderByWithRelationInputSchema.array(), _chunkDXQGOMEQcjs.NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkCEHTDISDcjs.NoteTypeWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var NoteTypeAggregateArgsSchema_default = NoteTypeAggregateArgsSchema;




exports.NoteTypeAggregateArgsSchema = NoteTypeAggregateArgsSchema; exports.NoteTypeAggregateArgsSchema_default = NoteTypeAggregateArgsSchema_default;
//# sourceMappingURL=chunk-QFBRVNXM.cjs.map