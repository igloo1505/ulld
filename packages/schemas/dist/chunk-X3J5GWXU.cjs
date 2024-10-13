"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');

// src/database/outputTypeSchemas/SettingsAppendixDeleteArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixDeleteArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixDeleteArgsSchema_default = SettingsAppendixDeleteArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixDeleteArgsSchema = SettingsAppendixDeleteArgsSchema; exports.SettingsAppendixDeleteArgsSchema_default = SettingsAppendixDeleteArgsSchema_default;
//# sourceMappingURL=chunk-X3J5GWXU.cjs.map