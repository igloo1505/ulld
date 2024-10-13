"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2ZWR6PVZcjs = require('./chunk-2ZWR6PVZ.cjs');


var _chunkRM4KAGYEcjs = require('./chunk-RM4KAGYE.cjs');


var _chunkCWX6BHAUcjs = require('./chunk-CWX6BHAU.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/DefinitionGroupByArgsSchema.ts
var _zod = require('zod');
var DefinitionGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.DefinitionWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk2ZWR6PVZcjs.DefinitionOrderByWithAggregationInputSchema.array(), _chunk2ZWR6PVZcjs.DefinitionOrderByWithAggregationInputSchema]).optional(),
  by: _chunkCWX6BHAUcjs.DefinitionScalarFieldEnumSchema.array(),
  having: _chunkRM4KAGYEcjs.DefinitionScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var DefinitionGroupByArgsSchema_default = DefinitionGroupByArgsSchema;




exports.DefinitionGroupByArgsSchema = DefinitionGroupByArgsSchema; exports.DefinitionGroupByArgsSchema_default = DefinitionGroupByArgsSchema_default;
//# sourceMappingURL=chunk-2O7X7T63.cjs.map