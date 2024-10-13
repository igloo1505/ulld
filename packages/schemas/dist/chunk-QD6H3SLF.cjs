"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP2CBW73Fcjs = require('./chunk-P2CBW73F.cjs');


var _chunkEZEQE6TLcjs = require('./chunk-EZEQE6TL.cjs');


var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');


var _chunkJROQYL3Mcjs = require('./chunk-JROQYL3M.cjs');

// src/database/outputTypeSchemas/SettingsAppendixFindFirstArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixFindFirstArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkP2CBW73Fcjs.SettingsAppendixOrderByWithRelationInputSchema.array(), _chunkP2CBW73Fcjs.SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkEZEQE6TLcjs.SettingsAppendixScalarFieldEnumSchema, _chunkEZEQE6TLcjs.SettingsAppendixScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsAppendixFindFirstArgsSchema_default = SettingsAppendixFindFirstArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixFindFirstArgsSchema = SettingsAppendixFindFirstArgsSchema; exports.SettingsAppendixFindFirstArgsSchema_default = SettingsAppendixFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-QD6H3SLF.cjs.map