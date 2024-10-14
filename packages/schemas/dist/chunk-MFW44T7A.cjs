"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCONL6IP3cjs = require('./chunk-CONL6IP3.cjs');


var _chunk7FJE2QGBcjs = require('./chunk-7FJE2QGB.cjs');

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
  data: _zod.z.union([_chunkCONL6IP3cjs.SettingsAppendixCreateInputSchema, _chunk7FJE2QGBcjs.SettingsAppendixUncheckedCreateInputSchema])
}).strict();
var SettingsAppendixCreateArgsSchema_default = SettingsAppendixCreateArgsSchema;





exports.SettingsAppendixSelectSchema = SettingsAppendixSelectSchema; exports.SettingsAppendixCreateArgsSchema = SettingsAppendixCreateArgsSchema; exports.SettingsAppendixCreateArgsSchema_default = SettingsAppendixCreateArgsSchema_default;
//# sourceMappingURL=chunk-MFW44T7A.cjs.map