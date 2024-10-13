"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBOGXS7PVcjs = require('./chunk-BOGXS7PV.cjs');


var _chunk7LKYBLUVcjs = require('./chunk-7LKYBLUV.cjs');

// src/database/outputTypeSchemas/SettingsAppendixCreateArgsSchema.ts
var _zod = require('zod');
var SettingsAppendixSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  updatedAt: _zod.z.boolean().optional()
}).strict();
var SettingsAppendixCreateArgsSchema = _zod.z.object({
  select: SettingsAppendixSelectSchema.optional(),
  data: _zod.z.union([_chunkBOGXS7PVcjs.SettingsAppendixCreateInputSchema, _chunk7LKYBLUVcjs.SettingsAppendixUncheckedCreateInputSchema])
}).strict();
var SettingsAppendixCreateArgsSchema_default = SettingsAppendixCreateArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixCreateArgsSchema = SettingsAppendixCreateArgsSchema; exports.SettingsAppendixCreateArgsSchema_default = SettingsAppendixCreateArgsSchema_default;
//# sourceMappingURL=chunk-GBUVFKMW.cjs.map