"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU5EZT5IBcjs = require('./chunk-U5EZT5IB.cjs');


var _chunk5DU4LKN4cjs = require('./chunk-5DU4LKN4.cjs');


var _chunk6GQDCVMQcjs = require('./chunk-6GQDCVMQ.cjs');


var _chunkOLSLVKDRcjs = require('./chunk-OLSLVKDR.cjs');


var _chunkDEILUSB5cjs = require('./chunk-DEILUSB5.cjs');

// src/database/outputTypeSchemas/SettingsUpsertArgsSchema.ts
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
var SettingsUpsertArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunkDEILUSB5cjs.SettingsWhereUniqueInputSchema,
  create: _zod.z.union([_chunkU5EZT5IBcjs.SettingsCreateInputSchema, _chunk5DU4LKN4cjs.SettingsUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk6GQDCVMQcjs.SettingsUpdateInputSchema, _chunkOLSLVKDRcjs.SettingsUncheckedUpdateInputSchema])
}).strict();
var SettingsUpsertArgsSchema_default = SettingsUpsertArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsUpsertArgsSchema = SettingsUpsertArgsSchema; exports.SettingsUpsertArgsSchema_default = SettingsUpsertArgsSchema_default;
//# sourceMappingURL=chunk-3OVRBDW2.cjs.map