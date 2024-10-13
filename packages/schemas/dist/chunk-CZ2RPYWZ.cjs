"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXJQVTL2Kcjs = require('./chunk-XJQVTL2K.cjs');


var _chunkZDZTE43Kcjs = require('./chunk-ZDZTE43K.cjs');


var _chunkUDC5R5JMcjs = require('./chunk-UDC5R5JM.cjs');


var _chunkMKIYDGBCcjs = require('./chunk-MKIYDGBC.cjs');


var _chunkIJEY6TVVcjs = require('./chunk-IJEY6TVV.cjs');

// src/database/outputTypeSchemas/AutoSettingUpsertArgsSchema.ts
var _zod = require('zod');
var AutoSettingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  glob: _zod.z.boolean().optional(),
  value: _zod.z.boolean().optional()
}).strict();
var AutoSettingUpsertArgsSchema = _zod.z.object({
  select: AutoSettingSelectSchema.optional(),
  where: _chunkIJEY6TVVcjs.AutoSettingWhereUniqueInputSchema,
  create: _zod.z.union([_chunkXJQVTL2Kcjs.AutoSettingCreateInputSchema, _chunkZDZTE43Kcjs.AutoSettingUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkUDC5R5JMcjs.AutoSettingUpdateInputSchema, _chunkMKIYDGBCcjs.AutoSettingUncheckedUpdateInputSchema])
}).strict();
var AutoSettingUpsertArgsSchema_default = AutoSettingUpsertArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingUpsertArgsSchema = AutoSettingUpsertArgsSchema; exports.AutoSettingUpsertArgsSchema_default = AutoSettingUpsertArgsSchema_default;
//# sourceMappingURL=chunk-CZ2RPYWZ.cjs.map