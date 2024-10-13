"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOLUAHAVRcjs = require('./chunk-OLUAHAVR.cjs');


var _chunkC5SM6PB5cjs = require('./chunk-C5SM6PB5.cjs');


var _chunkOLN5KQBLcjs = require('./chunk-OLN5KQBL.cjs');

// src/database/outputTypeSchemas/NoteTypeAggregateArgsSchema.ts
var _zod = require('zod');
var NoteTypeAggregateArgsSchema = _zod.z.object({
  where: _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOLUAHAVRcjs.NoteTypeOrderByWithRelationInputSchema.array(), _chunkOLUAHAVRcjs.NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkC5SM6PB5cjs.NoteTypeWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var NoteTypeAggregateArgsSchema_default = NoteTypeAggregateArgsSchema;




exports.NoteTypeAggregateArgsSchema = NoteTypeAggregateArgsSchema; exports.NoteTypeAggregateArgsSchema_default = NoteTypeAggregateArgsSchema_default;
//# sourceMappingURL=chunk-QOWB4KWN.cjs.map