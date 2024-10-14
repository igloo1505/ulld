"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCQHMXYHPcjs = require('./chunk-CQHMXYHP.cjs');


var _chunkKBPPDZZPcjs = require('./chunk-KBPPDZZP.cjs');


var _chunk72O2APQ6cjs = require('./chunk-72O2APQ6.cjs');


var _chunk7QDGTUEQcjs = require('./chunk-7QDGTUEQ.cjs');

// src/database/outputTypeSchemas/NoteTypeGroupByArgsSchema.ts
var _zod = require('zod');
var NoteTypeGroupByArgsSchema = _zod.z.object({
  where: _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkKBPPDZZPcjs.NoteTypeOrderByWithAggregationInputSchema.array(), _chunkKBPPDZZPcjs.NoteTypeOrderByWithAggregationInputSchema]).optional(),
  by: _chunk72O2APQ6cjs.NoteTypeScalarFieldEnumSchema.array(),
  having: _chunkCQHMXYHPcjs.NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var NoteTypeGroupByArgsSchema_default = NoteTypeGroupByArgsSchema;




exports.NoteTypeGroupByArgsSchema = NoteTypeGroupByArgsSchema; exports.NoteTypeGroupByArgsSchema_default = NoteTypeGroupByArgsSchema_default;
//# sourceMappingURL=chunk-YAE2FC4O.cjs.map