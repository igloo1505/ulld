"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJGMA6CBGcjs = require('./chunk-JGMA6CBG.cjs');


var _chunkXMXSNRFYcjs = require('./chunk-XMXSNRFY.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SequentialNoteListAggregateArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema.array(), _chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJGMA6CBGcjs.SequentialNoteListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SequentialNoteListAggregateArgsSchema_default = SequentialNoteListAggregateArgsSchema;




exports.SequentialNoteListAggregateArgsSchema = SequentialNoteListAggregateArgsSchema; exports.SequentialNoteListAggregateArgsSchema_default = SequentialNoteListAggregateArgsSchema_default;
//# sourceMappingURL=chunk-6TZACHXE.cjs.map