"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD6EQVJUUcjs = require('./chunk-D6EQVJUU.cjs');


var _chunkCNVOWJBWcjs = require('./chunk-CNVOWJBW.cjs');


var _chunkDEILUSB5cjs = require('./chunk-DEILUSB5.cjs');


var _chunk627Z5I6Ccjs = require('./chunk-627Z5I6C.cjs');

// src/database/outputTypeSchemas/SettingsFindFirstOrThrowArgsSchema.ts
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
var SettingsFindFirstOrThrowArgsSchema = _zod.z.object({
  select: SettingsSelectSchema.optional(),
  where: _chunk627Z5I6Ccjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkD6EQVJUUcjs.SettingsOrderByWithRelationInputSchema.array(), _chunkD6EQVJUUcjs.SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkDEILUSB5cjs.SettingsWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkCNVOWJBWcjs.SettingsScalarFieldEnumSchema, _chunkCNVOWJBWcjs.SettingsScalarFieldEnumSchema.array()]).optional()
}).strict();
var SettingsFindFirstOrThrowArgsSchema_default = SettingsFindFirstOrThrowArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsFindFirstOrThrowArgsSchema = SettingsFindFirstOrThrowArgsSchema; exports.SettingsFindFirstOrThrowArgsSchema_default = SettingsFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-SR7YKULJ.cjs.map