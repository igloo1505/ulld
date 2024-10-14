"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');

// src/database/outputTypeSchemas/SettingsFindUniqueArgsSchema.ts
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
var SettingsFindUniqueArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema
}).strict();
var SettingsFindUniqueArgsSchema_default = SettingsFindUniqueArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsFindUniqueArgsSchema = SettingsFindUniqueArgsSchema; exports.SettingsFindUniqueArgsSchema_default = SettingsFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-BUC2FSL3.cjs.map