"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');

// src/database/outputTypeSchemas/SettingsAppendixFindUniqueArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixFindUniqueArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixFindUniqueArgsSchema_default = SettingsAppendixFindUniqueArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixFindUniqueArgsSchema = SettingsAppendixFindUniqueArgsSchema; exports.SettingsAppendixFindUniqueArgsSchema_default = SettingsAppendixFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-A4C4GRT7.cjs.map