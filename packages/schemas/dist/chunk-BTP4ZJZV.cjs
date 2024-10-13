"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRV6E3MBXcjs = require('./chunk-RV6E3MBX.cjs');


var _chunkEED2LX2Wcjs = require('./chunk-EED2LX2W.cjs');


var _chunk2HM34ZP2cjs = require('./chunk-2HM34ZP2.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SequentialNoteListGroupByArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEED2LX2Wcjs.SequentialNoteListOrderByWithAggregationInputSchema.array(), _chunkEED2LX2Wcjs.SequentialNoteListOrderByWithAggregationInputSchema]).optional(),
  by: _chunk2HM34ZP2cjs.SequentialNoteListScalarFieldEnumSchema.array(),
  having: _chunkRV6E3MBXcjs.SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SequentialNoteListGroupByArgsSchema_default = SequentialNoteListGroupByArgsSchema;




exports.SequentialNoteListGroupByArgsSchema = SequentialNoteListGroupByArgsSchema; exports.SequentialNoteListGroupByArgsSchema_default = SequentialNoteListGroupByArgsSchema_default;
//# sourceMappingURL=chunk-BTP4ZJZV.cjs.map