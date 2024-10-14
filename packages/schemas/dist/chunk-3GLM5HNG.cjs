"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5CYLUQPCcjs = require('./chunk-5CYLUQPC.cjs');


var _chunkYSILVENEcjs = require('./chunk-YSILVENE.cjs');


var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');

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
  data: _zod.z.union([_chunk5CYLUQPCcjs.AutoSettingUpdateInputSchema, _chunkYSILVENEcjs.AutoSettingUncheckedUpdateInputSchema]),
  where: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema
}).strict();
var AutoSettingUpdateArgsSchema_default = AutoSettingUpdateArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingUpdateArgsSchema = AutoSettingUpdateArgsSchema; exports.AutoSettingUpdateArgsSchema_default = AutoSettingUpdateArgsSchema_default;
//# sourceMappingURL=chunk-3GLM5HNG.cjs.map