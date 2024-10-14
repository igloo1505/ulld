"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkATQO6OGEcjs = require('./chunk-ATQO6OGE.cjs');


var _chunkE34DZ3CIcjs = require('./chunk-E34DZ3CI.cjs');

// src/database/modelSchema/SettingsSchema.ts
var _zod = require('zod');
var SettingsSchema = _zod.z.object({
  landingImageAlign: _chunkE34DZ3CIcjs.ImageAlignmentSchema,
  id: _zod.z.number().int(),
  tooltips: _zod.z.boolean(),
  title: _zod.z.string(),
  summary_showCitations: _zod.z.boolean(),
  summary_showTags: _zod.z.boolean(),
  lockedLandingImage: _zod.z.string().nullable(),
  cleanOnSync: _zod.z.boolean(),
  plotTheme: _zod.z.string().nullable(),
  /**
   * [PluginSettingsRecord]
   */
  pluginSettings: _chunkATQO6OGEcjs.JsonValueSchema,
  firstSync: _zod.z.coerce.date(),
  lastSync: _zod.z.coerce.date()
});
var SettingsPartialSchema = SettingsSchema.partial();
var SettingsSchema_default = SettingsSchema;





exports.SettingsSchema = SettingsSchema; exports.SettingsPartialSchema = SettingsPartialSchema; exports.SettingsSchema_default = SettingsSchema_default;
//# sourceMappingURL=chunk-OVENOBZA.cjs.map