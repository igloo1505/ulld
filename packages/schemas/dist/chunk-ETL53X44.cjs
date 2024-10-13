"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');

// src/database/outputTypeSchemas/AutoSettingFindUniqueArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingFindUniqueArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingFindUniqueArgsSchema_default = AutoSettingFindUniqueArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingFindUniqueArgsSchema = AutoSettingFindUniqueArgsSchema; exports.AutoSettingFindUniqueArgsSchema_default = AutoSettingFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-ETL53X44.cjs.map