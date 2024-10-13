"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE44R6PHZcjs = require('./chunk-E44R6PHZ.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/RelatedValuesAggregateArgsSchema.ts
var _zod = require('zod');
var RelatedValuesAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkE44R6PHZcjs.RelatedValuesOrderByWithRelationInputSchema.array(), _chunkE44R6PHZcjs.RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RelatedValuesAggregateArgsSchema_default = RelatedValuesAggregateArgsSchema;




exports.RelatedValuesAggregateArgsSchema = RelatedValuesAggregateArgsSchema; exports.RelatedValuesAggregateArgsSchema_default = RelatedValuesAggregateArgsSchema_default;
//# sourceMappingURL=chunk-2UWNIEES.cjs.map