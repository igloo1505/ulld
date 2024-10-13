"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRCWUS33Ucjs = require('./chunk-RCWUS33U.cjs');

// src/database/outputTypeSchemas/AutoSettingCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var AutoSettingCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRCWUS33Ucjs.AutoSettingCreateManyInputSchema, _chunkRCWUS33Ucjs.AutoSettingCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var AutoSettingCreateManyAndReturnArgsSchema_default = AutoSettingCreateManyAndReturnArgsSchema;




exports.AutoSettingCreateManyAndReturnArgsSchema = AutoSettingCreateManyAndReturnArgsSchema; exports.AutoSettingCreateManyAndReturnArgsSchema_default = AutoSettingCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-3PKQ5MXT.cjs.map