"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHS2KXA2Hcjs = require('./chunk-HS2KXA2H.cjs');


var _chunkJJWTT57Icjs = require('./chunk-JJWTT57I.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/TagAggregateArgsSchema.ts
var _zod = require('zod');
var TagAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.TagWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkHS2KXA2Hcjs.TagOrderByWithRelationInputSchema.array(), _chunkHS2KXA2Hcjs.TagOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJJWTT57Icjs.TagWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var TagAggregateArgsSchema_default = TagAggregateArgsSchema;




exports.TagAggregateArgsSchema = TagAggregateArgsSchema; exports.TagAggregateArgsSchema_default = TagAggregateArgsSchema_default;
//# sourceMappingURL=chunk-RQHLP4GF.cjs.map