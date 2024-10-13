"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKSSGXVZ3cjs = require('./chunk-KSSGXVZ3.cjs');


var _chunkGKK2PZBEcjs = require('./chunk-GKK2PZBE.cjs');


var _chunkOZJRZ5I4cjs = require('./chunk-OZJRZ5I4.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SubjectGroupByArgsSchema.ts
var _zod = require('zod');
var SubjectGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.SubjectWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkKSSGXVZ3cjs.SubjectOrderByWithAggregationInputSchema.array(), _chunkKSSGXVZ3cjs.SubjectOrderByWithAggregationInputSchema]).optional(),
  by: _chunkOZJRZ5I4cjs.SubjectScalarFieldEnumSchema.array(),
  having: _chunkGKK2PZBEcjs.SubjectScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SubjectGroupByArgsSchema_default = SubjectGroupByArgsSchema;




exports.SubjectGroupByArgsSchema = SubjectGroupByArgsSchema; exports.SubjectGroupByArgsSchema_default = SubjectGroupByArgsSchema_default;
//# sourceMappingURL=chunk-EC6PNFXG.cjs.map