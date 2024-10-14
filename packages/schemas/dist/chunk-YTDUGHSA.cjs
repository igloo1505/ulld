"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');

// src/database/outputTypeSchemas/SettingsDeleteArgsSchema.ts
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
var SettingsDeleteArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema
}).strict();
var SettingsDeleteArgsSchema_default = SettingsDeleteArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsDeleteArgsSchema = SettingsDeleteArgsSchema; exports.SettingsDeleteArgsSchema_default = SettingsDeleteArgsSchema_default;
//# sourceMappingURL=chunk-YTDUGHSA.cjs.map