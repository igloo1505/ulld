"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHVHKZ5XQcjs = require('./chunk-HVHKZ5XQ.cjs');


var _chunkP6BC6OKRcjs = require('./chunk-P6BC6OKR.cjs');


var _chunkZCXSAD2Acjs = require('./chunk-ZCXSAD2A.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SequentialNoteListGroupByArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkP6BC6OKRcjs.SequentialNoteListOrderByWithAggregationInputSchema.array(), _chunkP6BC6OKRcjs.SequentialNoteListOrderByWithAggregationInputSchema]).optional(),
  by: _chunkZCXSAD2Acjs.SequentialNoteListScalarFieldEnumSchema.array(),
  having: _chunkHVHKZ5XQcjs.SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SequentialNoteListGroupByArgsSchema_default = SequentialNoteListGroupByArgsSchema;




exports.SequentialNoteListGroupByArgsSchema = SequentialNoteListGroupByArgsSchema; exports.SequentialNoteListGroupByArgsSchema_default = SequentialNoteListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-MJBGH5GF.cjs.map