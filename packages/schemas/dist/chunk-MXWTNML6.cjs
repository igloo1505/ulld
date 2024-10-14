"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');


var _chunk5EIKIXA7cjs = require('./chunk-5EIKIXA7.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibAggregateArgsSchema.ts
var _zod = require('zod');
var BibAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5EIKIXA7cjs.BibOrderByWithRelationInputSchema.array(), _chunk5EIKIXA7cjs.BibOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibAggregateArgsSchema_default = BibAggregateArgsSchema;




exports.BibAggregateArgsSchema = BibAggregateArgsSchema; exports.BibAggregateArgsSchema_default = BibAggregateArgsSchema_default;
//# sourceMappingURL=chunk-MXWTNML6.cjs.map