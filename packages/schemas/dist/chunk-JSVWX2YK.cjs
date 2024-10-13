"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNL2I3Y33cjs = require('./chunk-NL2I3Y33.cjs');


var _chunkZW5RHHVUcjs = require('./chunk-ZW5RHHVU.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/DefinitionAggregateArgsSchema.ts
var _zod = require('zod');
var DefinitionAggregateArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkNL2I3Y33cjs.DefinitionOrderByWithRelationInputSchema.array(), _chunkNL2I3Y33cjs.DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkZW5RHHVUcjs.DefinitionWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DefinitionAggregateArgsSchema_default = DefinitionAggregateArgsSchema;




exports.DefinitionAggregateArgsSchema = DefinitionAggregateArgsSchema; exports.DefinitionAggregateArgsSchema_default = DefinitionAggregateArgsSchema_default;
//# sourceMappingURL=chunk-JSVWX2YK.cjs.map