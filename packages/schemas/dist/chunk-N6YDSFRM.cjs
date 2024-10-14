"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPHYROK6Bcjs = require('./chunk-PHYROK6B.cjs');


var _chunk5HCJFP6Fcjs = require('./chunk-5HCJFP6F.cjs');


var _chunkJRCP334Scjs = require('./chunk-JRCP334S.cjs');


var _chunkJWOE7TWHcjs = require('./chunk-JWOE7TWH.cjs');

// src/database/outputTypeSchemas/SettingsAppendixGroupByArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixGroupByArgsSchema = _zod.z.object({
  where: _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkPHYROK6Bcjs.SettingsAppendixOrderByWithAggregationInputSchema.array(), _chunkPHYROK6Bcjs.SettingsAppendixOrderByWithAggregationInputSchema]).optional(),
  by: _chunkJRCP334Scjs.SettingsAppendixScalarFieldEnumSchema.array(),
  having: _chunk5HCJFP6Fcjs.SettingsAppendixScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsAppendixGroupByArgsSchema_default = SettingsAppendixGroupByArgsSchema;




exports.SettingsAppendixGroupByArgsSchema = SettingsAppendixGroupByArgsSchema; exports.SettingsAppendixGroupByArgsSchema_default = SettingsAppendixGroupByArgsSchema_default;
//# sourceMappingURL=chunk-N6YDSFRM.cjs.map