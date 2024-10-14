"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');

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
  where: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingFindUniqueArgsSchema_default = AutoSettingFindUniqueArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingFindUniqueArgsSchema = AutoSettingFindUniqueArgsSchema; exports.AutoSettingFindUniqueArgsSchema_default = AutoSettingFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-IDOJ4675.cjs.map