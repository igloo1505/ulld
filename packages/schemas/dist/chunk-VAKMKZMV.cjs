"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYVXVD6LPcjs = require('./chunk-YVXVD6LP.cjs');


var _chunkMY3VYKGTcjs = require('./chunk-MY3VYKGT.cjs');


var _chunkXROEPWGQcjs = require('./chunk-XROEPWGQ.cjs');


var _chunkQ5EZJXJEcjs = require('./chunk-Q5EZJXJE.cjs');


var _chunkHKOLODDPcjs = require('./chunk-HKOLODDP.cjs');

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
  where: _chunkHKOLODDPcjs.SettingsWhereUniqueInputSchema,
  create: _zod.z.union([_chunkYVXVD6LPcjs.SettingsCreateInputSchema, _chunkMY3VYKGTcjs.SettingsUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkXROEPWGQcjs.SettingsUpdateInputSchema, _chunkQ5EZJXJEcjs.SettingsUncheckedUpdateInputSchema])
}).strict();
var SettingsUpsertArgsSchema_default = SettingsUpsertArgsSchema;





exports.SettingsSelectSchema = SettingsSelectSchema; exports.SettingsUpsertArgsSchema = SettingsUpsertArgsSchema; exports.SettingsUpsertArgsSchema_default = SettingsUpsertArgsSchema_default;
//# sourceMappingURL=chunk-VAKMKZMV.cjs.map