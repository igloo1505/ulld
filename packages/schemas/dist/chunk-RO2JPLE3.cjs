"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4C3A4P56cjs = require('./chunk-4C3A4P56.cjs');


var _chunkJRCP334Scjs = require('./chunk-JRCP334S.cjs');


var _chunkE74AMCFGcjs = require('./chunk-E74AMCFG.cjs');


var _chunkJWOE7TWHcjs = require('./chunk-JWOE7TWH.cjs');

// src/database/outputTypeSchemas/SettingsAppendixFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixFindFirstOrThrowArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4C3A4P56cjs.SettingsAppendixOrderByWithRelationInputSchema.array(), _chunk4C3A4P56cjs.SettingsAppendixOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkE74AMCFGcjs.SettingsAppendixWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkJRCP334Scjs.SettingsAppendixScalarFieldEnumSchema, _chunkJRCP334Scjs.SettingsAppendixScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsAppendixFindFirstOrThrowArgsSchema_default = SettingsAppendixFindFirstOrThrowArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixFindFirstOrThrowArgsSchema = SettingsAppendixFindFirstOrThrowArgsSchema; exports.SettingsAppendixFindFirstOrThrowArgsSchema_default = SettingsAppendixFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-RO2JPLE3.cjs.map