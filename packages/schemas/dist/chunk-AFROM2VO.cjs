"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTOWZ6SWJcjs = require('./chunk-TOWZ6SWJ.cjs');


var _chunkR2X3XUNHcjs = require('./chunk-R2X3XUNH.cjs');


var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');


var _chunk4GP2GD42cjs = require('./chunk-4GP2GD42.cjs');

// src/database/outputTypeSchemas/SettingsFindFirstArgsSchema.ts
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
var SettingsFindFirstArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunk4GP2GD42cjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTOWZ6SWJcjs.SettingsOrderByWithRelationInputSchema.array(), _chunkTOWZ6SWJcjs.SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkR2X3XUNHcjs.SettingsScalarFieldEnumSchema, _chunkR2X3XUNHcjs.SettingsScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsFindFirstArgsSchema_default = SettingsFindFirstArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsFindFirstArgsSchema = SettingsFindFirstArgsSchema; exports.SettingsFindFirstArgsSchema_default = SettingsFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-AFROM2VO.cjs.map