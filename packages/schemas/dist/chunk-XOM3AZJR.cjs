"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOQWVPOSNcjs = require('./chunk-OQWVPOSN.cjs');


var _chunkJGIMZPVAcjs = require('./chunk-JGIMZPVA.cjs');

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
  data: _zod.z.union([_chunkOQWVPOSNcjs.AutoSettingCreateInputSchema, _chunkJGIMZPVAcjs.AutoSettingUncheckedCreateInputSchema])
}).strict();
var AutoSettingCreateArgsSchema_default = AutoSettingCreateArgsSchema;





exports.AutoSettingSelectSchema = AutoSettingSelectSchema; exports.AutoSettingCreateArgsSchema = AutoSettingCreateArgsSchema; exports.AutoSettingCreateArgsSchema_default = AutoSettingCreateArgsSchema_default;
//# sourceMappingURL=chunk-XOM3AZJR.cjs.map