"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCONL6IP3cjs = require('./chunk-CONL6IP3.cjs');


var _chunk7FJE2QGBcjs = require('./chunk-7FJE2QGB.cjs');


var _chunkBRY44CGWcjs = require('./chunk-BRY44CGW.cjs');


var _chunkZXJVQ5MEcjs = require('./chunk-ZXJVQ5ME.cjs');


var _chunkE74AMCFGcjs = require('./chunk-E74AMCFG.cjs');

// src/database/outputTypeSchemas/SettingsAppendixUpsertArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixUpsertArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  where: _chunkE74AMCFGcjs.SettingsAppendixWhereUniqueInputSchema,
  create: _zod.z.union([_chunkCONL6IP3cjs.SettingsAppendixCreateInputSchema, _chunk7FJE2QGBcjs.SettingsAppendixUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkBRY44CGWcjs.SettingsAppendixUpdateInputSchema, _chunkZXJVQ5MEcjs.SettingsAppendixUncheckedUpdateInputSchema])
}).strict();
var SettingsAppendixUpsertArgsSchema_default = SettingsAppendixUpsertArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixUpsertArgsSchema = SettingsAppendixUpsertArgsSchema; exports.SettingsAppendixUpsertArgsSchema_default = SettingsAppendixUpsertArgsSchema_default;
//# sourceMappingURL=chunk-SP333FUA.cjs.map