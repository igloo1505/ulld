"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE74AMCFGcjs = require('./chunk-E74AMCFG.cjs');

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
  where: _chunkE74AMCFGcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixDeleteArgsSchema_default = SettingsAppendixDeleteArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixDeleteArgsSchema = SettingsAppendixDeleteArgsSchema; exports.SettingsAppendixDeleteArgsSchema_default = SettingsAppendixDeleteArgsSchema_default;
//# sourceMappingURL=chunk-NQ75NUTV.cjs.map