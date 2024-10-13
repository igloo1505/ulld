"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');

// src/database/outputTypeSchemas/SettingsAppendixFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixFindUniqueOrThrowArgsSchema_default = SettingsAppendixFindUniqueOrThrowArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixFindUniqueOrThrowArgsSchema = SettingsAppendixFindUniqueOrThrowArgsSchema; exports.SettingsAppendixFindUniqueOrThrowArgsSchema_default = SettingsAppendixFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-DGQUEHKJ.cjs.map