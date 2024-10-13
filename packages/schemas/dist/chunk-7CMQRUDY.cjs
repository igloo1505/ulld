"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBYMIIP6Ncjs = require('./chunk-BYMIIP6N.cjs');


var _chunkWDWVLZRNcjs = require('./chunk-WDWVLZRN.cjs');


var _chunkTP6XLNZFcjs = require('./chunk-TP6XLNZF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/RelatedValuesGroupByArgsSchema.ts
var _zod = require('zod');
var RelatedValuesGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.RelatedValuesWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkWDWVLZRNcjs.RelatedValuesOrderByWithAggregationInputSchema.array(), _chunkWDWVLZRNcjs.RelatedValuesOrderByWithAggregationInputSchema]).optional(),
  by: _chunkTP6XLNZFcjs.RelatedValuesScalarFieldEnumSchema.array(),
  having: _chunkBYMIIP6Ncjs.RelatedValuesScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RelatedValuesGroupByArgsSchema_default = RelatedValuesGroupByArgsSchema;




exports.RelatedValuesGroupByArgsSchema = RelatedValuesGroupByArgsSchema; exports.RelatedValuesGroupByArgsSchema_default = RelatedValuesGroupByArgsSchema_default;
//# sourceMappingURL=chunk-7CMQRUDY.cjs.map