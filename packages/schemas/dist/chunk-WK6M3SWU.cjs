"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJLFZILIKcjs = require('./chunk-JLFZILIK.cjs');


var _chunk6UEYNKRIcjs = require('./chunk-6UEYNKRI.cjs');


var _chunkOXACKCMTcjs = require('./chunk-OXACKCMT.cjs');

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
  data: _zod.z.union([_chunkJLFZILIKcjs.SettingsAppendixUpdateInputSchema, _chunk6UEYNKRIcjs.SettingsAppendixUncheckedUpdateInputSchema]),
  where: _chunkOXACKCMTcjs.SettingsAppendixWhereUniqueInputSchema
}).strict();
var SettingsAppendixUpdateArgsSchema_default = SettingsAppendixUpdateArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixUpdateArgsSchema = SettingsAppendixUpdateArgsSchema; exports.SettingsAppendixUpdateArgsSchema_default = SettingsAppendixUpdateArgsSchema_default;
//# sourceMappingURL=chunk-WK6M3SWU.cjs.map