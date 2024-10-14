"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY6NUO7YGcjs = require('./chunk-Y6NUO7YG.cjs');


var _chunkRCPOMRVHcjs = require('./chunk-RCPOMRVH.cjs');


var _chunkNZQATWHZcjs = require('./chunk-NZQATWHZ.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/DefinitionGroupByArgsSchema.ts
var _zod = require('zod');
var DefinitionGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkY6NUO7YGcjs.DefinitionOrderByWithAggregationInputSchema.array(), _chunkY6NUO7YGcjs.DefinitionOrderByWithAggregationInputSchema]).optional(),
  by: _chunkNZQATWHZcjs.DefinitionScalarFieldEnumSchema.array(),
  having: _chunkRCPOMRVHcjs.DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DefinitionGroupByArgsSchema_default = DefinitionGroupByArgsSchema;




exports.DefinitionGroupByArgsSchema = DefinitionGroupByArgsSchema; exports.DefinitionGroupByArgsSchema_default = DefinitionGroupByArgsSchema_default;
//# sourceMappingURL=chunk-GBPD2NW5.cjs.map