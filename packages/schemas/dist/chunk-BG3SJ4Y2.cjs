"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');

// src/database/outputTypeSchemas/AutoSettingDeleteArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingDeleteArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingDeleteArgsSchema_default = AutoSettingDeleteArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingDeleteArgsSchema = AutoSettingDeleteArgsSchema; exports.AutoSettingDeleteArgsSchema_default = AutoSettingDeleteArgsSchema_default;
//# sourceMappingURL=chunk-BG3SJ4Y2.cjs.map