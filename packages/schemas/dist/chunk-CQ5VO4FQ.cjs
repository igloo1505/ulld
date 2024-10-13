"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk563CA7KFcjs = require('./chunk-563CA7KF.cjs');


var _chunkZ4QWB5E5cjs = require('./chunk-Z4QWB5E5.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/MdxNoteAggregateArgsSchema.ts
var _zod = require('zod');
var MdxNoteAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.MdxNoteWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZ4QWB5E5cjs.MdxNoteOrderByWithRelationInputSchema.array(), _chunkZ4QWB5E5cjs.MdxNoteOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk563CA7KFcjs.MdxNoteWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var MdxNoteAggregateArgsSchema_default = MdxNoteAggregateArgsSchema;




exports.MdxNoteAggregateArgsSchema = MdxNoteAggregateArgsSchema; exports.MdxNoteAggregateArgsSchema_default = MdxNoteAggregateArgsSchema_default;
//# sourceMappingURL=chunk-CQ5VO4FQ.cjs.map