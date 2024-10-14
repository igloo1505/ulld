"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQTTRYGOZcjs = require('./chunk-QTTRYGOZ.cjs');

// src/database/outputTypeSchemas/AutoSettingCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQTTRYGOZcjs.AutoSettingCreateManyInputSchema, _chunkQTTRYGOZcjs.AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var AutoSettingCreateManyAndReturnArgsSchema_default = AutoSettingCreateManyAndReturnArgsSchema;




exports.AutoSettingCreateManyAndReturnArgsSchema = AutoSettingCreateManyAndReturnArgsSchema; exports.AutoSettingCreateManyAndReturnArgsSchema_default = AutoSettingCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-FRXECPY5.cjs.map