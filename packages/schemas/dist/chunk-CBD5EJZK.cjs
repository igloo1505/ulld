"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU5EZT5IBcjs = require('./chunk-U5EZT5IB.cjs');


var _chunk5DU4LKN4cjs = require('./chunk-5DU4LKN4.cjs');

// src/database/outputTypeSchemas/SettingsCreateArgsSchema.ts
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
var SettingsCreateArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  data: _zod.z.union([_chunkU5EZT5IBcjs.SettingsCreateInputSchema, _chunk5DU4LKN4cjs.SettingsUncheckedCreateInputSchema]).optional()
}).strict();
var SettingsCreateArgsSchema_default = SettingsCreateArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsCreateArgsSchema = SettingsCreateArgsSchema; exports.SettingsCreateArgsSchema_default = SettingsCreateArgsSchema_default;
//# sourceMappingURL=chunk-CBD5EJZK.cjs.map