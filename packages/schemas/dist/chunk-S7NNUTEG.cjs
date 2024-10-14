"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZM2VLNDJcjs = require('./chunk-ZM2VLNDJ.cjs');


var _chunkTYJ6HJJAcjs = require('./chunk-TYJ6HJJA.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SubjectAggregateArgsSchema.ts
var _zod = require('zod');
var SubjectAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZM2VLNDJcjs.SubjectOrderByWithRelationInputSchema.array(), _chunkZM2VLNDJcjs.SubjectOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkTYJ6HJJAcjs.SubjectWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SubjectAggregateArgsSchema_default = SubjectAggregateArgsSchema;




exports.SubjectAggregateArgsSchema = SubjectAggregateArgsSchema; exports.SubjectAggregateArgsSchema_default = SubjectAggregateArgsSchema_default;
//# sourceMappingURL=chunk-S7NNUTEG.cjs.map