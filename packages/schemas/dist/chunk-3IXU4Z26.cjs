"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOQWVPOSNcjs = require('./chunk-OQWVPOSN.cjs');


var _chunkJGIMZPVAcjs = require('./chunk-JGIMZPVA.cjs');


var _chunk5CYLUQPCcjs = require('./chunk-5CYLUQPC.cjs');


var _chunkYSILVENEcjs = require('./chunk-YSILVENE.cjs');


var _chunkU6ULFZA2cjs = require('./chunk-U6ULFZA2.cjs');

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
  where: _chunkU6ULFZA2cjs.AutoSettingWhereUniqueInputSchema,
  create: _zod.z.union([_chunkOQWVPOSNcjs.AutoSettingCreateInputSchema, _chunkJGIMZPVAcjs.AutoSettingUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk5CYLUQPCcjs.AutoSettingUpdateInputSchema, _chunkYSILVENEcjs.AutoSettingUncheckedUpdateInputSchema])
}).strict();
var AutoSettingUpsertArgsSchema_default = AutoSettingUpsertArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingUpsertArgsSchema = AutoSettingUpsertArgsSchema; exports.AutoSettingUpsertArgsSchema_default = AutoSettingUpsertArgsSchema_default;
//# sourceMappingURL=chunk-3IXU4Z26.cjs.map