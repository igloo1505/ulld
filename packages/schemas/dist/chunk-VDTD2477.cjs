"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXHJOELBNcjs = require('./chunk-XHJOELBN.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/RelatedValuesAggregateArgsSchema.ts
var _zod = require('zod');
var RelatedValuesAggregateArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXHJOELBNcjs.RelatedValuesOrderByWithRelationInputSchema.array(), _chunkXHJOELBNcjs.RelatedValuesOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RelatedValuesAggregateArgsSchema_default = RelatedValuesAggregateArgsSchema;




exports.RelatedValuesAggregateArgsSchema = RelatedValuesAggregateArgsSchema; exports.RelatedValuesAggregateArgsSchema_default = RelatedValuesAggregateArgsSchema_default;
//# sourceMappingURL=chunk-VDTD2477.cjs.map