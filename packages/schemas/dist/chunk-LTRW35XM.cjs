"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBF6MITAGcjs = require('./chunk-BF6MITAG.cjs');


var _chunk3MFRRMX7cjs = require('./chunk-3MFRRMX7.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SequentialNoteListAggregateArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk3MFRRMX7cjs.SequentialNoteListOrderByWithRelationInputSchema.array(), _chunk3MFRRMX7cjs.SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBF6MITAGcjs.SequentialNoteListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SequentialNoteListAggregateArgsSchema_default = SequentialNoteListAggregateArgsSchema;




exports.SequentialNoteListAggregateArgsSchema = SequentialNoteListAggregateArgsSchema; exports.SequentialNoteListAggregateArgsSchema_default = SequentialNoteListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-LTRW35XM.cjs.map