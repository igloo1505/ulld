"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');

// src/database/outputTypeSchemas/SettingsFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var SettingsSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  tooltips: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  summary_showCitations: _zod.z.boolean().optional(),
  summary_showTags: _zod.z.boolean().optional(),
  landingImageAlign: _zod.z.boolean().optional(),
  lockedLandingImage: _zod.z.boolean().optional(),
  cleanOnSync: _zod.z.boolean().optional(),
  plotTheme: _zod.z.boolean().optional(),
  pluginSettings: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional()
}).strict();
var SettingsFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema
}).strict();
var SettingsFindUniqueOrThrowArgsSchema_default = SettingsFindUniqueOrThrowArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsFindUniqueOrThrowArgsSchema = SettingsFindUniqueOrThrowArgsSchema; exports.SettingsFindUniqueOrThrowArgsSchema_default = SettingsFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-C6RRA3SE.cjs.map