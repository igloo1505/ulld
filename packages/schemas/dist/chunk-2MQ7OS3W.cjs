"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');

// src/database/outputTypeSchemas/AutoSettingFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingFindUniqueOrThrowArgsSchema_default = AutoSettingFindUniqueOrThrowArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingFindUniqueOrThrowArgsSchema = AutoSettingFindUniqueOrThrowArgsSchema; exports.AutoSettingFindUniqueOrThrowArgsSchema_default = AutoSettingFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-2MQ7OS3W.cjs.map