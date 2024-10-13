"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUDC5R5JMcjs = require('./chunk-UDC5R5JM.cjs');


var _chunkMKIYDGBCcjs = require('./chunk-MKIYDGBC.cjs');


var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');

// src/database/outputTypeSchemas/AutoSettingUpdateArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingUpdateArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  data: _zod.z.union([_chunkUDC5R5JMcjs.AutoSettingUpdateInputSchema, _chunkMKIYDGBCcjs.AutoSettingUncheckedUpdateInputSchema]),
  where: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingUpdateArgsSchema_default = AutoSettingUpdateArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingUpdateArgsSchema = AutoSettingUpdateArgsSchema; exports.AutoSettingUpdateArgsSchema_default = AutoSettingUpdateArgsSchema_default;
//# sourceMappingURL=chunk-3JOQ6DCM.cjs.map