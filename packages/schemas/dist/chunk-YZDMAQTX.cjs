"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6GQDCVMQcjs = require('./chunk-6GQDCVMQ.cjs');


var _chunkOLSLVKDRcjs = require('./chunk-OLSLVKDR.cjs');


var _chunkDEILUSB5cjs = require('./chunk-DEILUSB5.cjs');

// src/database/outputTypeSchemas/SettingsUpdateArgsSchema.ts
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
var SettingsUpdateArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  data: _zod.z.union([_chunk6GQDCVMQcjs.SettingsUpdateInputSchema, _chunkOLSLVKDRcjs.SettingsUncheckedUpdateInputSchema]),
  where: _chunkDEILUSB5cjs.SettingsWhereUniqueInputSchema
}).strict();
var SettingsUpdateArgsSchema_default = SettingsUpdateArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsUpdateArgsSchema = SettingsUpdateArgsSchema; exports.SettingsUpdateArgsSchema_default = SettingsUpdateArgsSchema_default;
//# sourceMappingURL=chunk-YZDMAQTX.cjs.map