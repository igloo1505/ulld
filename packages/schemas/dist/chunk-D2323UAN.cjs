"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQTTRYGOZcjs = require('./chunk-QTTRYGOZ.cjs');

// src/database/outputTypeSchemas/AutoSettingCreateManyArgsSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQTTRYGOZcjs.AutoSettingCreateManyInputSchema, _chunkQTTRYGOZcjs.AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var AutoSettingCreateManyArgsSchema_default = AutoSettingCreateManyArgsSchema;




exports.AutoSettingCreateManyArgsSchema = AutoSettingCreateManyArgsSchema; exports.AutoSettingCreateManyArgsSchema_default = AutoSettingCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-D2323UAN.cjs.map