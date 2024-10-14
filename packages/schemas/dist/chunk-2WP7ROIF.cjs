"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');

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
  where: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingDeleteArgsSchema_default = AutoSettingDeleteArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingDeleteArgsSchema = AutoSettingDeleteArgsSchema; exports.AutoSettingDeleteArgsSchema_default = AutoSettingDeleteArgsSchema_default;
//# sourceMappingURL=chunk-2WP7ROIF.cjs.map