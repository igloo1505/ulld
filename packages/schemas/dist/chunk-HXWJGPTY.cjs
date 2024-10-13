"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBOGXS7PVcjs = require('./chunk-BOGXS7PV.cjs');


var _chunk7LKYBLUVcjs = require('./chunk-7LKYBLUV.cjs');


var _chunkJLFZILIKcjs = require('./chunk-JLFZILIK.cjs');


var _chunk6UEYNKRIcjs = require('./chunk-6UEYNKRI.cjs');


var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');

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
  where: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema,
  create: _zod.z.union([_chunkBOGXS7PVcjs.SettingsAppendixCreateInputSchema, _chunk7LKYBLUVcjs.SettingsAppendixUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkJLFZILIKcjs.SettingsAppendixUpdateInputSchema, _chunk6UEYNKRIcjs.SettingsAppendixUncheckedUpdateInputSchema])
}).strict();
var SettingsAppendixUpsertArgsSchema_default = SettingsAppendixUpsertArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixUpsertArgsSchema = SettingsAppendixUpsertArgsSchema; exports.SettingsAppendixUpsertArgsSchema_default = SettingsAppendixUpsertArgsSchema_default;
//# sourceMappingURL=chunk-HXWJGPTY.cjs.map