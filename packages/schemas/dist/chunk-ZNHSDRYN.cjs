"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXJQVTL2Kcjs = require('./chunk-XJQVTL2K.cjs');


var _chunkZDZTE43Kcjs = require('./chunk-ZDZTE43K.cjs');

// src/database/outputTypeSchemas/AutoSettingCreateArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingCreateArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  data: _zod.z.union([_chunkXJQVTL2Kcjs.AutoSettingCreateInputSchema, _chunkZDZTE43Kcjs.AutoSettingUncheckedCreateInputSchema])
}).strict();
var AutoSettingCreateArgsSchema_default = AutoSettingCreateArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingCreateArgsSchema = AutoSettingCreateArgsSchema; exports.AutoSettingCreateArgsSchema_default = AutoSettingCreateArgsSchema_default;
//# sourceMappingURL=chunk-ZNHSDRYN.cjs.map