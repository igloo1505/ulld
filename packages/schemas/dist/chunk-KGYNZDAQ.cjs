"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBRY44CGWcjs = require('./chunk-BRY44CGW.cjs');


var _chunkZXJVQ5MEcjs = require('./chunk-ZXJVQ5ME.cjs');


var _chunkE74AMCFGcjs = require('./chunk-E74AMCFG.cjs');

// src/database/outputTypeSchemas/SettingsAppendixUpdateArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixUpdateArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: _zod.z.union([_chunkBRY44CGWcjs.SettingsAppendixUpdateInputSchema, _chunkZXJVQ5MEcjs.SettingsAppendixUncheckedUpdateInputSchema]),
  where: _chunkE74AMCFGcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixUpdateArgsSchema_default = SettingsAppendixUpdateArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixUpdateArgsSchema = SettingsAppendixUpdateArgsSchema; exports.SettingsAppendixUpdateArgsSchema_default = SettingsAppendixUpdateArgsSchema_default;
//# sourceMappingURL=chunk-KGYNZDAQ.cjs.map